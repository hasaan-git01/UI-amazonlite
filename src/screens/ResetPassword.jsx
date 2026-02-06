import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import apis from "../Config/Apis";
import {
  warningToastify,
  errorToastify,
  successToastify,
} from "../Messages/Toastify";

import { TbLockPassword } from "react-icons/tb";
import { PiEyeClosedDuotone, PiEyeBold } from "react-icons/pi";
import { TbExchange } from "react-icons/tb";
import logo from "../assets/amz.png";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    password: "",
    confirmpassword: "",
  });

  const [password, setPassword] = useState("");

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmpassword) {
      return warningToastify("Password and Confirm Password Should be Same");
    }

    try {
      const { data } = await axios.post(`${apis.auth}/change-password`, {
        token,
        newPassword: user.password,
        confirmPassword: user.confirmpassword,
      });
      console.log("Submitting:", {
        token,
        newPassword: user.password,
        confirmPassword: user.confirmpassword,
      });

      console.log("Response:", data);

      if (!data.ok) {
        if (data.warning) warningToastify(data.warning);
        else errorToastify(data.error);
      } else {
        successToastify("Password Changed Successfully!");
        navigate("/signin");
      }
    } catch (err) {
      console.error("Axios error:", err.response || err);
      errorToastify("Something went wrong!");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const [showconfirmpassword, setShowconfirmpassword] = useState(false);

  return (
    <>
      <div className="container">
        <div className="min-h-screen flex justify-center items-center">
          <div className="rounded-2xl w-[550px]  p-8 ">
            <div className="flex justify-center items-center">
              <img src={logo} alt="Site Logo" className="w-[150px] " />
            </div>
            <form onSubmit={submitHandler}>
              <div className=" mx-auto rounded-2xl h-[400px] w-[550px] my-[30px] p-8 bg-blue-400">
                <div className="text-blue-100 text-3xl mt-[20px] mb-[40px] text-center font-semibold ">
                  Update Password
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

                <br />
                <button className="mt-[9px] text-[18px] bg-cyan-600 hover:bg-cyan-500 p-3 rounded-md text-white flex mx-[22px] h-[50px] w-[430px] justify-center">
                  Change Password{" "}
                  <TbExchange className="inline ml-[15px] mt-[4px]" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;
