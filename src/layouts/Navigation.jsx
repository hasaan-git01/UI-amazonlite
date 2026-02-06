import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../css/custom.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { BsBalloonHeartFill } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa6";
import { FcAbout, FcContacts } from "react-icons/fc";
import { MdMiscellaneousServices } from "react-icons/md";
import { useWishlist, WishlistProvider } from '../context/Wishlist';
import { useCart } from "../context/Cart";

const Navigation = () => {
  const [open, setOpen] = useState(false);
    const { getTotalItems,  } = useCart();
//const { getTotalItems } = useWishlist();
const navigate = useNavigate();
  const values = [
    {
      icon: <CiUser className="inline mr-2" />,
      name: "My Profile",
      route: "/profile",
    },
    
   {
      icon: <BsBalloonHeartFill className="inline text-red-500 mr-2" />,
      name: "Wishlist",
      route: "/wishlist",
      badge: getTotalItems(),  
    },
    {
      icon: <FaOpencart className="inline text-blue-500 mr-2" />,
      name: "Cart",
      route: "/cartpage",
      //badge: getCartCount(),    
    },
    {
      icon: <FcAbout className="inline mr-2" />,
      name: "About US",
      route: "/about",
    },
    {
      icon: <FcContacts className="inline mr-2" />,
      name: "Contact US",
      route: "/contactus",
    },
    {
      icon: <MdMiscellaneousServices className="inline mr-2" />,
      name: "Services",
      route: "/services",
    },
  ];

  return (
    <>
      <div className="bg-slate-300 text-white ">
        <h1 className="text-1xl ">
          <div className="flex gap-5 ">
            {/* 
<div className="text-slate-800 cursor-pointer p-[10px] ml-1 rounded-sm border border-transparent hover:border-white transition-all duration-100">
  <GiHamburgerMenu className='inline mb-[3px] mr-[3px] text-[20px]'/>ALL</div>
  */}

            <div className="relative inline-block text-left">
              <div
                className="text-slate-800   cursor-pointer p-[5px] mt-[6px] ml-1 rounded-sm border border-transparent hover:border-white
         transition-all duration-100 flex items-center"
                onClick={() => setOpen(!open)}
              >
                <GiHamburgerMenu className="text-[20px] inline mr-[3px]" />
                ALL
              </div>

              {open && (
                <div className="absolute mt-[5px] w-[140px] bg-white z-50 rounded-[20px] ">
                  {values.map((values, index) => (
                    <Link
                      key={index}
                      to={values.route}
                      className="block py-2 px-3 text-white  bg-slate-800 hover:text-blue-300 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {values.icon}
                      {values.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/" className="hover:text-blue-300 py-3 font-semibold">
              Home
            </NavLink>
            <NavLink
              to="/discover"
              className="hover:text-blue-300 py-3 font-semibold"
            >
              Discover_Products
            </NavLink>
            <NavLink
              to="/category"
              className="hover:text-blue-300 py-3 font-semibold"
            >
              Catagory
            </NavLink>
            <NavLink
              to="/services"
              className="hover:text-blue-300 py-3 font-semibold"
            >
              Coustomer_Services
            </NavLink>
            <NavLink
              to="/registery"
              className="hover:text-blue-300 py-3 font-semibold"
            >
              {" "}
              Registery
            </NavLink>
            <NavLink
              to="/deals"
              className="hover:text-blue-300 py-3 font-semibold"
            >
              Today's Deals
            </NavLink>
            <NavLink
              to="/dashboard"
              className=" hover:text-blue-300 py-3 font-semibold"
            >
              {" "}
              Dashboard{" "}
            </NavLink>
          </div>
        </h1>
      </div>
    </>
  );
};

export default Navigation;
 
 