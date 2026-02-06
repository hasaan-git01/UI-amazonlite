import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../layouts/Loader";
import Rating from "../screens/Rating";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { PiEyeLight } from "react-icons/pi";
import Apis from "../Config/Apis";
import { useWishlist } from '../context/Wishlist';
 

import { useCart } from '../context/Cart';
import { successToastify, errorToastify } from '../Messages/Toastify';

const categories = [
  { name: "Beauty & Cosmetic", key: ["beauty", "fragrances"] },
  { name: "Electronics", key: ["electronics"] },
  { name: "Entertainment", key: ["entertainment"] },
  { name: "Groceries & Essentials", key: ["groceries"] },
  { name: "Health & Wellness", key: ["health"] },
  { name: "Home Decoration & Essentials", key: ["home-decoration"] },
  { name: "Jewellery", key: ["womens-jewellery"] },
  { name: "Kitchen Accessories", key: ["kitchen-accessories"] },
  {
    name: "Mens Fashion",
    key: ["mens-shirts", "mens-shoes", "mens-watches", "sunglasses"],
  },
  { name: "PC & Laptops", key: ["pc-laptops", "tablets"] },
  { name: "Sports & Outdoors", key: ["sports-accessories"] },
  { name: "Kids , Baby & Toys", key: ["tops"] },
  {
    name: "Women Fashion",
    key: [
      "womens fashion",
      "skin-care",
      "sunglasses",
      "womens-bags",
      "womens-dresses",
      "womens-shoes",
      "womens-watches",
    ],
  },
  {
    name: "Mobile Phones & Accessories",
    key: ["smartphones", "mobile-accessories"],
  },
  { name: "Furniture", key: ["furniture"] },
  { name: "Vehicle", key: ["vehicle", "motorcycle"] },
];

const CategoryDetails = () => {
  const [liked, setLiked] = useState({});
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loader, setloader] = useState(false);

  const cngheart = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categoryObj = categories.find((c) =>
    c.key.some((k) => k.toLowerCase() === category.toLowerCase())
  );
  const categoryName = categoryObj?.name || category;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setloader(true);
        const res = await axios.get(`${Apis.PROD}/`);

        console.log("API Response:", res.data);

        const allProducts = res.data.allproducts || [];

        const filtered = allProducts.filter((p) =>
          categoryObj?.key.some(
            (k) => p.category.toLowerCase() === k.toLowerCase()
          )
        );

        console.log("Filtered products:", filtered);
        setProducts(filtered);
        setloader(false);
      } catch (err) {
        console.error("API fetch error:", err);
        setloader(false);
      }
    };

    if (categoryObj) {
      loadProducts();
    }
  }, [category]);


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
   const { addToWishlist, isInWishlist } = useWishlist();
 const handleWishlistToggle = (product) => {
    addToWishlist(product);
    
    if (isInWishlist(product._id)) {
      successToastify('Removed from wishlist');
    } else {
      successToastify('Added to wishlist');
    }
  };
   return (
    <>
      <div className="p-2 bg-white ">
        <pre className="text-sm mb-2 text-slate-950">
          AmazonLite &gt; Category &gt; {categoryName}
        </pre>
        <div className="p-6 ">
          <h1 className="text-3xl font-semibold mb-6">
            Products in "{categoryName}"
          </h1>

          {loader ? (
            <div className={`${loader ? "h-[700px]" : "h-auto"} w-full`}>
              <Loader />
            </div>
          ) : products.length === 0 ? (
            <h2 className="text-center text-xl">
              No products found in this category.
            </h2>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white shadow-lg rounded-md w-[288px] hover:scale-105 transition duration-200 border-slate-700"
                >
                  <div className="flex justify-between mt-1 mx-5">
                    <div className="text-semibold text-slate-500 text-[20px] pl-[2px] pt-1">
                      {product.brand}
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
                    src={product.images[0]}
                    alt="Product Picture"
                    className="h-48 p-2 mx-auto object-center"
                  />

                  <div className="text-bold text-center text-[18px] pl-3 pt-2">
                    {product.title}
                  </div>

                  <div className="flex justify-between mt-1 mx-5">
                    <div className="text-cyan-600">{product.category}</div>
                    <div>
                      {product.stock === 0 ? (
                        <div className="text-red-600 underline">
                          Out of stock
                        </div>
                      ) : (
                        <div className="text-cyan-600">
                          {product.stock} items left
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between mt-1 mx-5">
                    <div>
                      <Rating rating={product.rating} />
                    </div>
                    <div className="text-cyan-600">${product.price}</div>
                  </div>

                  <div className="pb-0 flex justify-center">
                    <Link to={`/product/${product._id}`}>
                      <button
                        className="flex items-center justify-center flex-1 w-[144px] h-[39px] bg-blue-500 text-white py-2  
                          rounded-bl-md rounded-t-none hover:bg-blue-600 transition-colors duration-200 border"
                      >
                        <PiEyeLight className="text-[20px] m-1" /> View More
                      </button>
                    </Link>

                    <button
                      onClick={() => handleAddToCart(product)}
                      title="Add to Cart"
                      className="flex items-center justify-center flex-1 w-[144px] h-[39px] bg-green-400 text-white py-2  
                        rounded-br-md rounded-t-none cursor-pointer hover:bg-green-500 transition-colors duration-200 border"
                    >
                      <MdAddShoppingCart className="text-[20px]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <h1 className="text-2xl text-black m-16 text-center">
            More Items Will Added Soon !
          </h1>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
 
                       