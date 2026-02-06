 
import React from 'react';
import { useCart } from '../context/Cart';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { NavLink } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa'; 
import { errorToastify, warningToastify } from '../Messages/Toastify';

 
const CartPage = () => {
 
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  // ✅ Handle quantity update with stock check
  const handleQuantityChange = (item, newQuantity) => {
    const result = updateQuantity(item._id, newQuantity, item.stock);
    
    if (!result.success) {
      warningToastify(result.message);
    }
  };
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <MdRemoveShoppingCart className="text-8xl text-gray-400 mb-4" />
         <div className="text-5xl text-center mt-32 font-bold drop-shadow-[0_9px_5px_rgba(0,0,0,1)] animate-bounce ">
       
          😐
        </div>
        <h1 className="text-3xl text-center font-bold m-3 ">
       
          There is No Items In Cart !!
        </h1>
        <h1 className="text-3xl text-center font-bold m-3">
        
          Continue Shopping
          <NavLink to="/discover">
            <FaArrowRight className="inline mx-4 border bg-green-400 p-2 rounded-full text-[45px]" />
          </NavLink>
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-md shadow-md p-4 flex gap-4"
              >
                {/* Product Image */}
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-md"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.brand}</p>
                  <p className="text-cyan-600 font-bold mt-2">${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                    >
                      <FiMinus />
                    </button>
                    <span className="font-semibold text-lg px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>

                {/* Item Total & Remove */}
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <RiDeleteBin6Line className="text-2xl" />
                  </button>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Subtotal</p>
                    <p className="font-bold text-xl text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-md shadow-md p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (10%)</span>
                  <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t pt-3 mb-6">
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>${(getTotalPrice() * 1.1).toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 font-semibold text-lg"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate('/discover')}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-md hover:bg-gray-300 font-semibold mt-3"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage