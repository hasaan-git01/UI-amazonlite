import React, { useState } from "react";
import logo from "../assets/amz.png";
import { TbLockPassword } from "react-icons/tb";
import { PiEyeBold, PiEyeClosedDuotone, PiSignInLight } from "react-icons/pi";

const Password = () => {
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const [showPassword, setShowPassword] = useState(false);

  const [showconfirmpassword, setShowconfirmpassword] = useState(false);

  return (
    <>
      <div className="containerr">
        <div className="min-h-screen flex justify-center items-center">
          <div className="rounded-2xl w-[550px] p-8 ">
            <div className="flex justify-center items-center">
              <img src={logo} alt="Site Logo" className="w-[150px] " />
            </div>
            <div className="rounded-2xl w-[550px] h-[400px] my-[50px] p-8 bg-blue-400">
              <div className="text-blue-100 text-3xl mt-[20px] mb-[40px] text-center font-semibold ">
                Create new Password
              </div>
              <form onSubmit={changeHandler}>
                <div className="flex mx-[22px] bg-blue-300 h-[50px] w-[430px] rounded-md mt-[20px]">
                  <TbLockPassword className="ml-2 w-6 h-6 text-white mt-[12px] mr-2" />
                  <input
                    className="text-white bg-transparent focus:outline-none w-full"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password"
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

                <br />
                <button className="mt-[9px] text-[18px] bg-teal-400 hover:bg-teal-500 p-3 rounded-md text-white flex mx-[22px] h-[50px] w-[430px] justify-center">
                  Sign In
                  <div className="inline mt-[3px] text-[22px] ml-[5px]">
                    <PiSignInLight />
                  </div>
                </button>
                <div className="justify-between flex text-slate-900 "></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
