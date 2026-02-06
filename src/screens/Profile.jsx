import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  const [auth, setAuth] = useAuth();

  const Signout = () => {
    localStorage.removeItem("auth");
    setTimeout(() => {
      warningToastify("You are Sign-out Successfully!");
      location.reload();

      navigate("/");
    }, 3000);
  };
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[700px] h-[500px] bg-white shadow-lg rounded-xl p-6 flex flex-col justify-center items-center space-y-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full bg-gray-200 rounded-lg p-3 text-center font-semibold">
            User Name : {auth.user.name}
          </div>
          <div className="w-full bg-gray-200 rounded-lg p-3 text-center font-semibold">
            Email : {auth.user.email}
          </div>
          <div className="w-full bg-gray-200 rounded-lg p-3 text-center font-semibold">
            Role : {auth.user.role}
          </div>
          <div className="flex justify-between w-full">
            <NavLink to="/UpdateProfile">
              <button className="w-[320px] bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-lg">
                Update Profile
              </button>
            </NavLink>
            <button
              onClick={Signout}
              className="w-[320px] bg-rose-500 hover:bg-rose-400 text-white p-3 rounded-lg"
            >
              <FiLogOut className="inline" /> Sign-out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
