import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add to cart with stock check
  const addToCart = (product) => {
    // Check if product is in stock
    if (product.stock <= 0) {
      return { success: false, message: 'Product is out of stock!' };
    }

    setCartItems((prev) => {
      const existing = prev.find((item) => item._id === product._id);
      
      if (existing) {
        // Check if we can add more (stock limit)
        if (existing.quantity >= product.stock) {
          return prev; // Don't add more, stock limit reached
        }
        
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    return { success: true, message: `${product.title} added to cart!` };
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item._id !== productId));
  };

  // ✅ Update quantity with stock check
  const updateQuantity = (productId, quantity, maxStock) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return { success: true };
    }
    
    // Check stock limit
    if (quantity > maxStock) {
      return { success: false, message: `Only ${maxStock} items available in stock!` };
    }
    
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      )
    );

    return { success: true };
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);