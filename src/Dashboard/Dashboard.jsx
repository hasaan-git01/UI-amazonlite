import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { warningToastify } from "../Messages/Toastify";
import Loader from "../layouts/Loader";

const Dashboard = () => {
  const Navigate = useNavigate();
  const [auth] = useAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      if (!auth || !auth.token) {
        warningToastify(
          "You are unAuthorize for this page please first sign in!"
        );
        Navigate("/signin");
      }
      // if (!auth.role == "admin") {
      //   warningToastify("You are unAuthorize for this page");
      //   Navigate("/");
      // }
    }
  }, [auth, loading, Navigate]);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="h-[1000px]">
      <div className="flex w-full bg-white">
        <Sidebar />

        <div className="ml-[60px] flex justify-center mt-2 w-full">
          <div className="flex-1 p-6 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
