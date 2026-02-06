import React, { useState } from "react";
import Catagory from "../screens/Catagory";
import noimg from "../assets/noimg.png";
import Rating from "../screens/Rating";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { Link } from "react-router-dom";

import { MdAddShoppingCart } from "react-icons/md";
import { PiEyeLight } from "react-icons/pi";

import { useCart } from '../context/Cart';
import { successToastify, errorToastify  } from '../Messages/Toastify';
import { useWishlist } from "../context/Wishlist";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const { addToWishlist, isInWishlist } = useWishlist();
 const handleWishlistToggle = (product) => {
    addToWishlist(product);
    
    if (isInWishlist(product._id)) {
      successToastify('Removed from wishlist');
    } else {
      successToastify('Added to wishlist');
    }
  };
  const cngheart = () => {
    setLiked(!liked);
  };

  const {
    sku,
    _id,
    title,
    images,
    price,
    brand,
    stock,
    rating,
    category,
    discription,
  } = product;


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
  return (
    <>
      <div className=" bg-white shadow-lg rounded-md w-[288px] hover:scale-105 transition duration-200 border-slate-700 ">
        <div className="flex justify-between mt-1 mx-5">
          <div className="text-semibold text-slate-500 text-[20px] pl-[2px] pt-1  ">
            {brand}
          </div>
          <div
                               className="mt-[8px]"
                               title={isInWishlist(product._id) ? "Remove from Wishlist" : "Add to Wishlist"}
                              onClick={() => handleWishlistToggle(product)}
                               style={{ cursor: "pointer", fontSize: "24px" }}
                             >
                              {isInWishlist(product._id) ? (
                                 <FaHeart className="text-red-500" />
                               ) : (
                                 <CiHeart />
                               )}
                             </div>
        </div>
        <img
          src={images[0] ? images[0] : noimg}
          alt="Product Picture"
          className="h-48 p-2 mx-auto object-center"
        />
        <div className="text-bold text-center text-[18px] pl-3 pt-2">
          {title}
        </div>
        <div className="flex justify-between mt-1 mx-5">
          <div className="text-cyan-600">{category}</div>
          <div>
            {stock == 0 ? (
              <div className="text-red-600 underline">Out of stock</div>
            ) : (
              <div className="text-cyan-600"> {stock} items left </div>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-1 mx-5">
          <div>
            <Rating rating={rating} />
          </div>
          <div className="text-cyan-600">${price}</div>
        </div>
        <div className=" pb-0 flex justify-center">
          <Link to={`/product/${_id}`}>
            <button
              className="flex items-center justify-center flex-1 w-[144px] h-[39px] bg-blue-500 text-white py-2  
           rounded-bl-md rounded-t-none 
           hover:bg-blue-600 transition-colors duration-200 border"
            >
              <PiEyeLight className=" text-[20px] m-1" /> View More
            </button>
          </Link>
          <button
           onClick={() => handleAddToCart(product)}
            title="Add to Cart"
            className="flex items-center justify-center flex-1 w-[144px] h-[39px] bg-green-400 text-white py-2  
           rounded-br-md rounded-t-none cursor-pointer
           hover:bg-green-500 transition-colors duration-200 border"
          >
            <MdAddShoppingCart className=" text-[20px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
{
  /* <div className="flex justify-between mt-1 mx-5">
            <button className="bg-blue-400 text-2xl">
              
            </button>
            <button className="bg-green-400 text-2xl">
             
            </button>
          </div>     flex w-full    */
}
