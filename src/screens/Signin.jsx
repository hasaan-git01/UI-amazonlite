import React, { useEffect, useState } from "react";
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

import { PiSignInLight } from "react-icons/pi";
import { MdAlternateEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { PiEyeClosedDuotone, PiEyeBold } from "react-icons/pi";
import axios from "axios";
import { useAuth } from "../context/Auth";

const Signin = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
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
  const signinHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${apis.auth}/signin`, user);

      const { ok, error, message, warning } = data;
      if (!ok) {
        if (warning) {
          warningToastify(warning);
        } else {
          errorToastify(error);
        }
      } else {
        infoToastify("You'll be redirected to the Home Page soon");

        setTimeout(() => {
          successToastify("You're Signed in Successfully😎");

          localStorage.setItem(
            "auth",
            JSON.stringify({
              ok: true,
              user: data.user,
              token: data.token,
              refreshToken: data.refreshToken,
            })
          );

          setAuth({
            ok: true,
            user: data.user,
            token: data.token,
            refreshToken: data.refreshToken,
          });

          navigate("/");
        }, 1000);
        //location.reload()
      }
    } catch (error) {
      if (error.response?.status === 403) {
        errorToastify(
          error.response.data.error ||
            "Your account has been blocked. Please contact us."
        );
      } else if (error.response?.data?.error) {
        errorToastify(error.response.data.error);
      } else {
        errorToastify("Something went wrong. Please try again.");
      }
    }
  };

  // const olduser = JSON.parse(localStorage.getItem("users")) || []

  // // const founduser = olduser.find((u) => u.email === olduser.email)

  // const founduser = olduser.find((u) => u.email === user.email)

  //   const signindetails= (e) => {
  //     e.preventDefault()
  //     if (!user.email || !user.password) {
  //       warningToastify('Both Fields are Required!')
  //     }
  //     else if ( !founduser ) {
  //       errorToastify('User not Found')
  //     }
  //     else if (founduser.password!= user.password) {
  //       errorToastify('Password is incorrect')
  //     }
  //     else{
  //
  //       successToastify('Sign In Successfully!!')
  //     }
  //   }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="containerr">
        <div className="min-h-screen flex justify-center items-center">
          <div className="rounded-2xl w-[550px] p-8 ">
            <div className="flex justify-center items-center">
              <img src={logo} alt="Site Logo" className="w-[150px] " />
            </div>
            <div className="rounded-2xl w-[550px] h-[420px] my-[50px] p-8 bg-blue-400">
              <div className="text-blue-100 text-3xl mt-[20px] mb-[40px] text-center font-semibold ">
                Sign-in
              </div>
              <form onSubmit={signinHandler}>
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
                {/* onClick={signindetails} */}

                <br />
                <button className="mt-[9px] text-[18px] bg-yellow-300 hover:bg-yellow-400 p-3 rounded-md text-white flex mx-[22px] h-[50px] w-[430px] justify-center">
                  Sign In
                  <div className="inline mt-[3px] text-[22px] ml-[5px]">
                    <PiSignInLight />
                  </div>
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

                  <Link to="/forget-password">
                    <div className="cursor-pointer underline mt-[30px] text-[16px]">
                      Forget Password?
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
export default Signin;
