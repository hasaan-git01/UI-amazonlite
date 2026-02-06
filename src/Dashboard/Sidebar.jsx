import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

import {
  FiBox,
  FiUsers,
  FiShoppingCart,
  FiMessageSquare,
  FiLogOut,
} from "react-icons/fi";
import AdminPage from "./AdminPage";
import Users from "./Users";
import Messages from "./Messages";
import Products from "./Products";
import Profile from "./UpdateProfile";
import Orders from "./Orders";
import { warningToastify } from "../Messages/Toastify";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setopen] = useState("admin");

  const Signout = () => {
    localStorage.removeItem("auth");
    setTimeout(() => {
      warningToastify("You are Sign-out Successfully!");
      location.reload();
      navigate("/");
    }, 5000);
  };

  const BarSide = [
    {
      key: "admin",
      label: "Admin overview",
      icon: <MdOutlineAdminPanelSettings size={22} />,
      path: "adminpage",
    },
    {
      key: "profile",
      label: "My Profile",
      icon: <CiUser size={22} />,
      path: "profile",
    },
    {
      key: "products",
      label: "Products",
      icon: <FiBox size={18} />,
      path: "Products",
    },
    {
      key: "users",
      label: "Users",
      icon: <FiUsers size={18} />,
      path: "users",
    },
    {
      key: "orders",
      label: "Orders",
      icon: <FiShoppingCart size={18} />,
      path: "orders",
    },
    {
      key: "messages",
      label: "Messages",
      icon: <FiMessageSquare size={18} />,
      path: "messages",
    },
  ];
  return (
    <>
      <div className=" absolute h-[calc(144vh-51px)] top-[104] z-40 pointer-events-none">
        <nav className=" pointer-events-auto group flex flex-col h-full transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-tr-md shadow-2xl overflow-hidden w-[55px]  hover:w-[200px]">
          <div className="text-slate-700 px-4 py-4 text-base font-semibold cursor-default flex items-center gap-3">
            <RxDashboard size={18} className="flex-shrink-0" />

            <span className=" opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Dashboard
            </span>
          </div>
          <div className="mb-[20px] mt-[5px]">
            <hr />
          </div>
          <div className="flex flex-col gap-[2px]">
            {BarSide.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                onClick={() => setopen(item.key)}
                className={`
                flex items-center gap-4 w-full text-left px-4 py-3 rounded-md
                transition-colors duration-150
                ${open === item.key ? "bg-slate-900/40" : "hover:bg-black/10"}
              `}
              >
                <div className="flex-shrink-0">{item.icon}</div>

                <span
                  className="
                  transform transition-all duration-200
                  opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0
                  whitespace-nowrap text-lg"
                >
                  {item.label}
                </span>
              </NavLink>
            ))}
          </div>

          <div
            className=" px-4 py-4 text-base font-semibold cursor-pointer flex items-center gap-3"
            onClick={Signout}
          >
            <FiLogOut size={18} className="flex-shrink-0" />

            <span className=" opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Signout
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
