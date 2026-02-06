import React from "react";
import { AiFillProduct } from "react-icons/ai";
import { PiUsersThreeFill } from "react-icons/pi";
import { FcSalesPerformance } from "react-icons/fc";
import { MdOutlineAttachMoney } from "react-icons/md";
import prod from "../assets/prod.png";
import rev from "../assets/rev.png";
import users from "../assets/users.jpeg";
import sales from "../assets/sales.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
import Apis from "../Config/Apis";

const AdminPage = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const { data } = await axios.get(`${Apis.auth}/all`);
        if (data.ok) {
          setUserCount(data.users.length);
        }
        console.log(userCount);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    const fetchProductCount = async () => {
      try {
        const { data } = await axios.get(`${Apis.PROD}/`);

        if (data.ok) {
          setProductCount(data.allproducts.length);
        }
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchUserCount();
    fetchProductCount();
  }, []);

  console.log(productCount);
  return (
    <>
      <div className="text-5xl font-semibold my-[20px] font-sans">
        Admin Dashboard
      </div>
      <div className=" ml-[99px] w-[1200px]  bg-transparent p-10 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* ------------------------------- */}
        <div className="relative w-full h-56 rounded-3xl overflow-hidden shadow-md">
          <div className="relative z-20 w-1/2 h-full bg-[#bfedfd] p-6">
            <h2 className="text-xl font-semibold mb-2 mr-[50px]">
              Total Products
            </h2>
            <div className="text-4xl ml-[50px]">
              <AiFillProduct />
            </div>
            <div className="text-4xl my-[10px] mr-[83px]">{productCount}</div>
          </div>

          <div
            className="absolute bg-contain mr-[30px] inset-0  bg-right"
            style={{
              backgroundImage: `url(${prod})`,
              maskImage:
                "linear-gradient(to top left, transparent 10%, black 60%)",
              WebkitMaskImage:
                "linear-gradient(to bottom left, transparent 20%, black 60%)",
            }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-bl from-transparent   to-[#afe8fb]"></div>
        </div>

        {/* ------------------ */}
        <div className="relative w-full h-56 rounded-3xl overflow-hidden shadow-md">
          <div className="relative z-20 w-1/2 h-full bg-[#beffda] p-6">
            <h2 className="text-xl font-semibold mb-2 mr-[50px]">
              Total Users
            </h2>
            <div className="text-4xl ml-[50px]">
              <PiUsersThreeFill />
            </div>
            <div className="text-4xl my-[10px] mr-[83px]">{userCount}</div>
          </div>

          <div
            className="absolute inset-0 bg-contain mr-[40px] bg-right"
            style={{
              backgroundImage: `url(${users})`,
              maskImage:
                "linear-gradient(to top left, transparent 20%, black 60%)",
              WebkitMaskImage:
                "linear-gradient(to bottom left, transparent 20%, black 60%)",
            }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-bl from-transparent  to-[#a8facb]"></div>
        </div>

        {/* ---------------------- */}
        <div className="relative w-full h-56 rounded-3xl overflow-hidden shadow-md">
          <div className="relative z-20 w-1/2 h-full bg-[#fffbb5] p-6">
            <h2 className="text-xl font-semibold mb-2 mr-[50px]">
              Total Sales
            </h2>
            <div className="text-4xl ml-[50px]">
              <FcSalesPerformance />
            </div>
            <div className="text-4xl my-[10px] mr-[83px]">0</div>
          </div>

          <div
            className="absolute inset-0 bg-contain mr-[40px] bg-right"
            style={{
              backgroundImage: `url(${sales})`,
              maskImage:
                "linear-gradient(to top left, transparent 20%, black 60%)",
              WebkitMaskImage:
                "linear-gradient(to bottom left, transparent 20%, black 60%)",
            }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-[#fffbb5]"></div>
        </div>

        {/* --------------------------- */}
        <div className="relative w-full h-56 rounded-3xl overflow-hidden shadow-md">
          <div className="relative z-20 w-1/2 h-full bg-[#dbc5ff] p-6">
            <h2 className="text-xl font-semibold mb-2 mr-[50px]">
              Total Revenue
            </h2>
            <div className="text-4xl ml-[50px]">
              <MdOutlineAttachMoney />
              <div className="text-4xl my-[10px] mr-[93px]">Rs 0</div>
            </div>
          </div>

          <div
            className="absolute inset-0 bg-contain ml-[20px] bg-right"
            style={{
              backgroundImage: `url(${rev})`,
              maskImage:
                "linear-gradient(to top left, transparent 20%, black 60%)",
              WebkitMaskImage:
                "linear-gradient(to bottom left, transparent 20%, black 60%)",
            }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-[#c8a8fc]"></div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
