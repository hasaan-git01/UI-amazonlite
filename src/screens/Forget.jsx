import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/custom.css";
import logo from "../assets/amz.png";
import apis from "../Config/Apis";

import {
  infoToastify,
  errorToastify,
  warningToastify,
  successToastify,
} from "../Messages/Toastify";

import { MdAlternateEmail } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";
import axios from "axios";

const Forget = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const signinHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`${apis.auth}/forget-password`, user);

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

  return (
    <>
      <div className="containerr">
        <div className="min-h-screen flex justify-center items-center">
          <div className="rounded-2xl w-[550px] p-8 ">
            <div className="flex justify-center items-center">
              <img src={logo} alt="Site Logo" className="w-[150px] " />
            </div>
            <div className="rounded-2xl w-[550px] h-[450px] my-[50px] p-8 bg-blue-400">
              <div className="text-[130px] mx-auto flex text-blue-950 justify-center">
                {" "}
                <BiSolidLock />
              </div>
              <div className="text-rose-500 text-3xl mt-[10px] mb-[30px] text-center font-semibold ">
                Forget Password
              </div>
              <form onSubmit={signinHandler}>
                <div className="flex mx-[22px] bg-blue-300 h-[50px] w-[430px] rounded-md mt-[15px]">
                  <MdAlternateEmail className="ml-2 w-6 h-6 text-white mt-[12px] mr-2" />
                  <input
                    className="text-white bg-transparent focus:outline-none w-full"
                    name="email"
                    placeholder="Enter Your Email"
                    value={user.email}
                    onChange={changeHandler}
                  />
                </div>
                <br />
                <button className="mt-[2px] text-[18px] bg-rose-500 hover:bg-rose-400 p-3 rounded-md text-white flex mx-[22px] h-[50px] w-[430px] justify-center">
                  Send
                </button>
                <div className="justify-between flex text-slate-900 ">
                  <Link to="/signup">
                    <div className="mt-[30px] cursor-default text-[16px]">
                      Don't have an Account Then?
                      <button className="underline italic cursor-pointer">
                        Sign Up
                      </button>
                    </div>
                  </Link>

                  <Link to="/signin">
                    <div className="cursor-pointer underline mt-[30px] text-[16px]">
                      &lt; Back
                    </div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;
