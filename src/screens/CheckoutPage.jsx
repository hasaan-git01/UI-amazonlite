import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/Cart';
import { successToastify, errorToastify } from '../Messages/Toastify';
import { FaShippingFast, FaCreditCard } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  
  // Check if coming from "Buy Now" (single product) or from Cart
  const buyNowProduct = location.state?.product;
  const buyNowQuantity = location.state?.quantity || 1;
  
  // Determine items to checkout
  const checkoutItems = buyNowProduct 
    ? [{ ...buyNowProduct, quantity: buyNowQuantity }]
    : cartItems;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    paymentMethod: 'cod', // cod, card, paypal
  });

  const [orderProcessing, setOrderProcessing] = useState(false);

  // Calculate totals
  const subtotal = buyNowProduct 
    ? buyNowProduct.price * buyNowQuantity
    : getTotalPrice();
  const tax = subtotal * 0.1;
  const shipping = 0; // Free shipping
  const total = subtotal + tax + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      errorToastify('Please fill in all required fields');
      return;
    }

    if (checkoutItems.length === 0) {
      errorToastify('No items to checkout');
      return;
    }

    try {
      setOrderProcessing(true);

      // Prepare order data
      const orderData = {
        customer: formData,
        items: checkoutItems.map(item => ({
          productId: item._id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          image: item.images[0],
        })),
        subtotal,
        tax,
        shipping,
        total,
        paymentMethod: formData.paymentMethod,
        orderDate: new Date().toISOString(),
      };

      console.log('Order Data:', orderData);

      // TODO: Send order to backend
      // const response = await axios.post(`${Apis.ORDER}/create`, orderData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      successToastify('Order placed successfully! 🎉');

      // Clear cart if not Buy Now
      if (!buyNowProduct) {
        clearCart();
      }

      // Redirect to order confirmation or orders page
      setTimeout(() => {
        navigate('/'); // or '/order-confirmation'
      }, 2000);

    } catch (error) {
      console.error('Order error:', error);
      errorToastify('Failed to place order. Please try again.');
    } finally {
      setOrderProcessing(false);
    }
  };

  if (checkoutItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">No Items to Checkout</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <div className="bg-white rounded-md shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <MdLocationOn className="text-2xl text-blue-500" />
                <h2 className="text-xl font-bold text-gray-800">Shipping Information</h2>
              </div>

              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-md shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <FaCreditCard className="text-2xl text-green-500" />
                <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>
              </div>

              <div className="space-y-3">
                <label className="flex items-center p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-semibold">Cash on Delivery</div>
                    <div className="text-sm text-gray-500">Pay when you receive</div>
                  </div>
                </label>

                <label className="flex items-center p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-semibold">Credit/Debit Card</div>
                    <div className="text-sm text-gray-500">Pay securely online</div>
                  </div>
                </label>

                <label className="flex items-center p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-semibold">PayPal</div>
                    <div className="text-sm text-gray-500">Fast & secure payment</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-md shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

              {/* Items */}
              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                {checkoutItems.map((item) => (
                  <div key={item._id} className="flex gap-3">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-16 h-16 object-contain rounded-md border"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-semibold line-clamp-2">{item.title}</div>
                      <div className="text-xs text-gray-500">Qty: {item.quantity}</div>
                      <div className="text-sm font-bold text-cyan-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 mb-4 border-t pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                disabled={orderProcessing}
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 font-semibold text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {orderProcessing ? 'Processing...' : 'Place Order'}
              </button>

              {/* Shipping Info */}
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <div className="flex items-center gap-2 text-blue-700">
                  <FaShippingFast />
                  <span className="text-sm font-medium">Free Shipping on all orders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;