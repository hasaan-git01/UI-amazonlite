import React, { useEffect, useState } from "react";
import "../css/custom.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/amz.png";

import {
  infoToastify,
  errorToastify,
  warningToastify,
  successToastify,
} from "../Messages/Toastify";

import { BiUser } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { IoGitNetworkSharp } from "react-icons/io5";

import { PiEyeClosedDuotone, PiEyeBold } from "react-icons/pi";
import axios from "axios";
import Apis from "../Config/Apis";
import { useAuth } from "../context/Auth";

const Signup = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "",
  });
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth")) || null;
    if (auth?.token) {
      navigate("/");
    }
  });
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`${Apis.auth}/pre-signup`, user);

    const { ok, error, message, warning } = data;
    if (!ok) {
      if (warning) {
        warningToastify(warning);
      } else {
        errorToastify(error);
      }
    } else {
      successToastify(message);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const [showconfirmpassword, setShowconfirmpassword] = useState(false);

  return (
    <>
      <div className="container">
        <div className="min-h-screen flex justify-center items-center">
          <div className="rounded-2xl w-[550px] p-8 ">
            <div className="flex justify-center items-center">
              <img src={logo} alt="Site Logo" className="w-[150px] " />
            </div>
            <form onSubmit={signupHandler}>
              <div className=" mx-auto rounded-2xl w-[550px] my-[30px] p-8 bg-blue-400">
                <div className="text-blue-100 text-3xl mt-[20px] mb-[40px] text-center font-semibold ">
                  Create New Account
                </div>

                <div className=" flex mx-[22px] bg-blue-300 h-[50px] w-[430px] rounded-md mt-[20px]">
                  <BiUser className="ml-2 w-6 h-6 text-white mt-[12px] mr-2" />
                  <input
                    className="text-white bg-transparent focus:outline-none w-full"
                    name="name"
                    placeholder="Enter Your Name"
                    value={user.name}
                    onChange={changeHandler}
                  />
                </div>

                <div className="flex mx-[22px] bg-blue-300 h-[50px] w-[430px] rounded-md mt-[20px]">
                  <MdAlternateEmail className="ml-2 w-6 h-6 text-white mt-[12px] mr-2" />
                  <input
                    className="text-white bg-transparent focus:outline-none w-full"
                    name="email"
                    placeholder="Enter Your Email"
                    value={user.email}
                    onChange={changeHandler}
                  />
                </div>

                <div className="flex mx-[22px] bg-blue-300 h-[50px] w-[430px] rounded-md mt-[20px]">
                  <TbLockPassword className="ml-2 w-6 h-6 text-white mt-[12px] mr-2" />
                  <input
                    className="text-white bg-transparent focus:outline-none w-full"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password"
                    value={user.password}
                    onChange={changeHandler}
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer mr-3"
                  >
                    {showPassword ? (
                      <PiEyeBold className="text-white inline mt-[13px] mx-2 w-6 h-6" />
                    ) : (
                      <PiEyeClosedDuotone className="text-white inline mt-[13px] mx-[4px] w-6 h-6" />
                    )}
                  </div>
                </div>

                <div className="flex mx-[22px] bg-blue-300 h-[50px] w-[430px] rounded-md mt-[20px]">
                  <TbLockPassword className="ml-2 w-6 h-6 text-white mt-[12px] mr-2" />
                  <input
                    className="text-white bg-transparent focus:outline-none w-full"
                    name="confirmpassword"
                    type={showconfirmpassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={user.confirmpassword}
                    onChange={changeHandler}
                  />
                  <div
                    onClick={() => setShowconfirmpassword(!showconfirmpassword)}
                    className="cursor-pointer mr-3"
                  >
                    {showconfirmpassword ? (
                      <PiEyeBold className="text-white inline mt-[13px] mx-2 w-6 h-6" />
                    ) : (
                      <PiEyeClosedDuotone className="text-white inline mt-[13px] mx-[4px] w-6 h-6" />
                    )}
                  </div>
                </div>

                <div className="flex mx-[22px] bg-blue-300 h-[50px] w-[430px] rounded-md mt-[20px] items-center relative">
                  <IoGitNetworkSharp className="ml-2 w-6 h-6 text-white mr-2" />

                  <select
                    className="text-white bg-transparent focus:outline-none w-full px-2 cursor-pointer
               [color-scheme:light] mr-[20px]"
                    name="role"
                    value={user.role}
                    onChange={changeHandler}
                  >
                    <option value="" disabled hidden>
                      Select Role
                    </option>
                    <option value="admin" disabled className="text-gray-400">
                      Admin
                    </option>

                    <option value="buyer" className="text-black">
                      Buyer
                    </option>
                  </select>
                </div>

                <br />
                <button className="mt-[9px] text-[18px] bg-green-400 hover:bg-green-500 p-3 rounded-md text-white flex mx-[22px] h-[50px] w-[430px] justify-center">
                  Create Account
                </button>

                <NavLink to="/signin">
                  <div className="mt-[30px] text-center cursor-default text-[16px]">
                    If You Already have an Account Then?
                    <button className="underline italic ml-[6px] cursor-pointer">
                      Sign-in
                    </button>
                  </div>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
