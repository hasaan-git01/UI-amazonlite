import React from "react";
import AddProducts from "./AddProducts";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineViewInAr } from "react-icons/md";
import Apis from "../Config/Apis";

const Viewproducts = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="h-[1080] text-3xl font-semibold text-slate-950 m-2">
          Products Page
        </h1>
        <Link to="/getallproducts">
          <button className="text-[28px] text-white w-[1385px] h-[90px] m-3 p-3 bg-rose-500 hover:bg-rose-400 rounded-md">
            <MdOutlineViewInAr className="inline mb-[6px]" /> View all Product
          </button>
        </Link>
        <Link to="addproducts">
          <button className="text-[28px] text-white w-[1385px] h-[90px] m-3 p-3 bg-cyan-500 hover:bg-cyan-400 rounded-md">
            <IoMdAddCircleOutline className="inline mb-[6px]" /> Add new Product
          </button>
        </Link>

        <Outlet />
      </div>
    </>
  );
};

export default Viewproducts;
