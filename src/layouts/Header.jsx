import React, { useState, useEffect } from "react";
import logo from "../assets/amz.png";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi2";

import { CiSearch } from "react-icons/ci";

import { useAuth } from "../context/Auth";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { successToastify, warningToastify } from "../Messages/Toastify";
import { FaArrowRight } from "react-icons/fa";
import Loader from "./Loader";



import { useCart } from '../context/Cart';
import { useWishlist } from '../context/Wishlist';
import { MdShoppingCart } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import SearchBar from "./SearchBar";
import { GiGlassHeart } from "react-icons/gi";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const Signout = () => {
    localStorage.removeItem("auth");
    setTimeout(() => {
      warningToastify("You are Sign-out Successfully!");
      location.reload();

      navigate("/");
    }, 5000);
  };

  const [itsOpen, setItsOpen] = useState(false);

//const ProductCard = () => {
  const { addToCart } = useCart();

   

    const { getTotalItems, getTotalPrice } = useCart();
    const { geetTotalItems  } = useWishlist();
  const navigate = useNavigate();
 
  const handleSearch = (query) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };
  return (
    <>
      <header className="bg-blue-800 h-[56px] flex items-center pl-6  pr-3 py-3">
        <div className="text-3xl font-bold text-white mr-[100px] ml-0">
          <a href="/">
            <img
              className="h-13 w-[200px] ml-0 mr-10 cursor-pointer rounded-sm border border-transparent hover:border-gray-400 transition-all duration-100 "
              src={logo}
              alt="Site logo"
              title="Amazon Lite"
            />
          </a>
        </div>


        <SearchBar onSearch={handleSearch }/>

        {/* <div className="flex items-center w-full h-[38px] max-w-2xl border-2 border-violet-900 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search on store"
            className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none"
          />

          <button className="bg-slate-800 h-[37px] hover:bg-slate-950 text-white px-4 py-2 flex items-center justify-center">
            <CiSearch className="w-4 h-4 " />
          </button>
        </div> */}

        <div className="  flex items-center w-full h-12 ">
          <div className="flex-grow"></div>

          {/* text-3xl mr-3  */}

          {auth?.ok && auth?.user ? (
            <div className="flex">
              <div className="relative inline-block">
                <div
                  className="flex cursor-pointer p-2 text-xl text-gray-700 hover:text-gray-700"
                >
                  <Link
                    to="/wishlist"
                    className="flex  items-center text-rose-600 mr-[20px] relative hover:scale-110 transition duration-150 "
                  >
                    <GiGlassHeart
                      title="Open The Wishlist"
                      className=" inline-block "
                      size={30}
                    />{" "}
                     
                    {geetTotalItems() > 0 && (
                    <span
                      className="absolute -top-[4px] right-7  bg-red-700 text-white rounded-full px-[8px] pt-[3px] pb-[3px]
                 text-xs  ease-in-out"
                    >
                      {geetTotalItems()}
          </span>
        )}
                  </Link>
                  <Link
                    to="/Cartpage"
                    className="flex items-center text-slate-950 mr-[20px] relative hover:scale-110 transition duration-150 "
                  >
                    <MdOutlineShoppingCart
                      title="Open The Cart"
                      className=" inline-block "
                      size={30}
                    />{" "}
                    <span className="hidden sm:inline font-semibold mt-2">
                      Cart
                    </span>
                    {getTotalItems() > 0 && (
                    <span
                      className="absolute -top-[4px] right-1  bg-slate-950 text-white rounded-full px-[8px] pt-[3px] pb-[3px]
                 text-xs  ease-in-out"
                    >
                      {getTotalItems()}
          </span>
        )}
                  </Link>
                </div>

                {itsOpen && (
                  <div
                    onMouseEnter={() => setItsOpen(true)}
                    onMouseLeave={() => setItsOpen(false)}
                    className="absolute top-full w-[150px] -right-[90px] transform -translate-x-1/2  bg-slate-800 border
                     border-gray-900 shadow-lg rounded-md p-[14px] flex flex-col gap-2 z-50"
                  > 
                    <div className="text-[18px] font-thin text-white">
                      Items : {getTotalItems()}
                    </div> 
                    <hr />
                    <div className="text-[18px] font-thin text-white">
                      Total : ${getTotalPrice()}
                    </div>
                    <NavLink to="/Cartpage">
                      <button className="bg-slate-950 text-white py-2 px-2 w-[120px] rounded-xl hover:bg-slate-950 border-[1px] border-gray-800 transition">
                        View More <FaArrowRight className="inline mb-1" />
                      </button>
                    </NavLink>
                  </div>
                )}
              </div>

              <div className="text-[20px] mr-2 mt-2 text-gray-200 justify-center items-center hover:text-white font-sans">
                Welcome! &nbsp;{auth.user.name}
              </div>

              <div className="relative inline-block">
                <div
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                  className="cursor-pointer p-2 text-xl text-gray-700 hover:text-gray-900"
                >
                  <NavLink to="/Profile" className="">
                    <HiOutlineUserCircle className="text-white inline text-3xl ml-1 hover:scale-125 transition duration-300" />
                  </NavLink>{" "}
                </div>

                {isOpen && (
                  <div
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="absolute top-full  w-[150px]  -right-[70px]  transform -translate-x-1/2  bg-blue-400 border
                     border-gray-300 shadow-lg rounded-md p-[14px] flex flex-col gap-3 z-50"
                  >
                    {" "}
                    <NavLink to="/Profile">
                      <button
                        className="bg-blue-500 w-[120px] text-white py-1 rounded hover:bg-blue-600 border-[1px]
                       border-gray-800 transition"
                      >
                        View Profile
                      </button>{" "}
                    </NavLink>
                    <button
                      onClick={Signout}
                      className="bg-green-500 text-white py-1 w-[120px] rounded hover:bg-green-600 border-[1px]
                       border-gray-800 transition"
                    >
                      <FiLogOut className="inline mb-1" /> Sign-out
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex">
              <NavLink to="/signup">
                <div className="cursor-pointer">
                  <h1 className="text-[20px] mr-2 text-gray-300 justify-center items-center hover:scale-110 transition duration-180 hover:text-white border border-transparent hover:border-gray-200 rounded-md p-2 font-sans">
                    Hello, Sign Up!
                  </h1>
                </div>
              </NavLink>
              <NavLink to="/signin" className="">
                <HiOutlineUserCircle className="text-white inline text-3xl ml-1 mt-2 hover:scale-125 transition duration-200" />
              </NavLink>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
