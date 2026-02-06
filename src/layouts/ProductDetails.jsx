import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../Redux/Action/prodActions";
import { useDispatch, useSelector } from "react-redux";
import noimg from "../assets/noimg.png";
 import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loader from "../layouts/Loader";
import { FaHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import Rating from "../screens/Rating";
import {
  errorToastify,
  successToastify,
  warningToastify,
} from "../Messages/Toastify";
import { useWishlist } from '../context/Wishlist';
 import { useCart } from '../context/Cart';
 
const ProductDetails = () => {
  const [quantity, setQuantity] = React.useState(1);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, loading } = useSelector((state) => state.prodSlice);
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

    const { addToCart } = useCart();  
 
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

  // if (loading) return <p> <Loader/></p>;
  // if (!product || Object.keys(product).length === 0) return <p>No product found</p>;


   const { addToWishlist, isInWishlist } = useWishlist();
  
 
  const handleWishlistToggle = (product) => {
    addToWishlist(product);
    
    if (isInWishlist(product._id)) {
      successToastify('Removed from wishlist');
    } else {
      successToastify('Added to wishlist');
    }
  };

   const navigate = useNavigate();
  const [aquantity, setaQuantity] = useState(1);

  const handleBuyNow = () => {
    if (product.stock <= 0) {
      errorToastify('This product is out of stock!');
      return;
    }

    if (aquantity > product.stock) {
      errorToastify(`Only ${product.stock} items available!`);
      return;
    }

     navigate('/checkout', {
      state: {
        product: product,
        aquantity: aquantity
      }
    });
  };
  return (
    <>
      <div className=" max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex items-center justify-center bg-slate-50 rounded-lg p-6">
          <img
            src={product.images ? product.images[0] : noimg}
            alt="Product Image"
            className="text-center w-[600px] max-h-[700px]"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[18px] uppercase text-gray-500 font-medium">
            | Brand : {product.brand}
          </p>

          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-1">
            {product.title}
          </h1>

          <h1 className="text-[20px] font-semibold text-gray-900 mt-1">
            {product.subTitle}
          </h1>

          <div className="flex items-center gap-2 mt-3">
            <span className="text-gray-700 font-medium  ">
              <div>
                <Rating rating={product.rating} />
              </div>
            </span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-sm text-gray-500">
              Reviews : {product.reviews}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-sm text-gray-500">
              SKU : &nbsp;{product.sku}
            </span>
          </div>

          <p className="text-gray-600 mt-5 leading-relaxed text-[15px]">
            <span className="text-[20px] font font-semibold">
              {" "}
              About this Item:
            </span>
            <br />
            {product.discription}
          </p>
          <div className="flex ">
            <p className="text-2xl font-semibold text-gray-900 mt-6 ">
              Price : ${product.price}{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            {product.stock == 0 ? (
              <div className="text-red-600 underline text-[20px]  mt-6">
                Out of stock
              </div>
            ) : (
              <div className="text-green-500 text-[20px] mt-6 mr-4">
                In Stock <br />
                <hr className="border-slate-900" />
                {product.stock} items left
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Quantity:
            </label>

            <div className="flex items-center border rounded-md border-teal-600 h-[40px] overflow-hidden">
              <button
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                -
              </button>

              <input
                type="number"
                value={quantity}
                min={1}
                max={product.stock}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 h-10 text-center border-l border-r border-gray-300 focus:outline-none"
              />

              <button
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold"
                onClick={() =>
                  setQuantity((prev) => Math.min(prev + 1, product.stock))
                }
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
             onClick={() => handleAddToCart(product)}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md 
          font-medium transition hover:scale-110 duration-150 w-[199px]"
            >
              <MdAddShoppingCart className="text-2xl" />
              Add to Cart
            </button>

            <button
  onClick={handleBuyNow}
  disabled={product.stock === 0}
  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition hover:scale-110 duration-150 w-[199px] ${
    product.stock === 0
      ? 'bg-gray-400 cursor-not-allowed text-gray-600'
      : 'bg-blue-500 text-white hover:bg-blue-600'
  }`}
>
  {product.stock === 0 ? 'Out of Stock' : 'Buy Now'}
</button>
            <br />
          </div>
          <div className="flex pt-5 ">
            <button
  title={isInWishlist(product._id) ? "Remove from Wishlist" : "Add to Wishlist"}
  onClick={() => handleWishlistToggle(product)}
  className={`flex items-center justify-center gap-1 border px-2 py-3 rounded-md font-medium transition hover:scale-110 duration-150 w-[199px] ${
    isInWishlist(product._id)
      ? 'bg-rose-500 border-rose-400 text-white hover:bg-rose-600'
      : 'border-gray-400 text-gray-700 hover:bg-gray-100'
  }`}
>
  <FaHeart className={isInWishlist(product._id) ? "text-white" : "text-red-500"} />
  {isInWishlist(product._id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
