 import React from 'react';
import { useWishlist } from '../context/Wishlist';
import { useCart } from '../context/Cart';
import { useNavigate, Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdAddShoppingCart, MdFavoriteBorder } from 'react-icons/md';
import { successToastify, errorToastify, warningToastify } from '../Messages/Toastify';
import Rating from './Rating';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (product.stock <= 0) {
      errorToastify('This product is out of stock!');
      return;
    }

    const result = addToCart(product);
    
    if (result.success) {
      successToastify(result.message);
    } else {
      warningToastify('Stock limit reached!');
    }
  };

  const handleMoveToCart = (product) => {
    handleAddToCart(product);
    removeFromWishlist(product._id);
    successToastify('Moved to cart!');
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <MdFavoriteBorder className="text-8xl text-gray-400 mb-4" />
        <h2 className="text-3xl font-bold text-gray-700 mb-2">Your Wishlist is Empty</h2>
        <p className="text-gray-500 mb-6">Save your favorite items here!</p>
        <button
          onClick={() => navigate('/discover')}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Wishlist</h1>
            <p className="text-gray-600 mt-1">{wishlistItems.length} items saved</p>
          </div>
          <button
            onClick={clearWishlist}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Clear Wishlist
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-md shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="relative">
                <Link to={`/product/${product._id}`}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-48 object-contain p-4"
                  />
                </Link>
                
                 <button
                  onClick={() => removeFromWishlist(product._id)}
                  className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-red-50"
                  title="Remove from wishlist"
                >
                  <RiDeleteBin6Line className="text-red-500 text-xl" />
                </button>

                 {product.stock === 0 && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    Out of Stock
                  </div>
                )}
              </div>

               <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                <Link to={`/product/${product._id}`}>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 hover:text-blue-600 line-clamp-2">
                    {product.title}
                  </h3>
                </Link>

                <div className="flex items-center justify-between mb-3">
                  <Rating rating={product.rating} />
                  <span className="text-cyan-600 text-sm">{product.category}</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="text-2xl font-bold text-gray-800">${product.price}</div>
                  <div className="text-sm text-gray-600">
                    {product.stock > 0 ? `${product.stock} left` : 'Out of stock'}
                  </div>
                </div>

                 <div className="flex gap-2">
                  <button
                    onClick={() => handleMoveToCart(product)}
                    disabled={product.stock === 0}
                    className={`flex-1 py-2 px-2 rounded-md font-semibold flex items-center justify-center gap-2 ${
                      product.stock === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    <MdAddShoppingCart />
                    Move to Cart
                  </button>
                  
                  <Link to={`/product/${product._id}`} className="flex-1">
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;