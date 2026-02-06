import React, { useEffect, useState } from "react";
import axios from "axios";
import Apis from "../Config/Apis";
import { errorToastify, successToastify } from "../Messages/Toastify";
import Loader from "../layouts/Loader";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { LiaStreetViewSolid } from "react-icons/lia";
import { CgUnblock } from "react-icons/cg";
import { CgBlock } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  const FetchUsers = async () => {
    try {
      const { data } = await axios.get(`${Apis.auth}/all`);
      const { ok, users, error, message } = data;
      if (ok) {
        setLoader(false);
        setUsers(users);
      } else {
        errorToastify(error || message);
        setLoader(false);
      }
    } catch (error) {
      console.log(`Something Went Wrong!`, error);
      errorToastify("Server Error");
      setLoader(false);
    }
  };
  // const totalusers = users.length
  // console.log(totalusers)
  const BlockUser = async (userId, BlockStatus) => {
    try {
      console.log("Toggling block for user ID:", userId);

      const { data } = await axios.put(`${Apis.auth}/block/${userId}`);

      if (data.ok) {
        successToastify(data.message);

        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, isBlocked: !BlockStatus } : user
          )
        );
      } else {
        errorToastify(data.error || "Action failed");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      errorToastify(error.response?.data?.error || "Failed to block user ");
    }
  };

  useEffect(() => {
    FetchUsers();
  }, []);

  if (loader) return <Loader />;

  return (
    <div className="w-full h-[900px] bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Users Dashboard</h1>

      <div className="flex bg-blue-400 text-white p-3 rounded-t-md font-semibold">
        <div className="w-1/4">Name</div>
        <div className="w-1/4">Email</div>
        <div className="w-1/4">Role</div>
        <div className="w-1/4">Actions</div>
      </div>

      <div className="flex flex-col mt-2 gap-2">
        {users.length === 0 ? (
          <div className="text-center py-10 text-gray-500">No users found</div>
        ) : (
          users.map((user) => (
            <div
              key={user._id}
              className="flex bg-white p-3 rounded-md shadow hover:bg-gray-50"
            >
              <div className="w-1/4">{user.name}</div>
              <div className="w-1/4">{user.email}</div>
              <div className="w-1/4 capitalize">{user.role}</div>

              <div className="w-1/4 flex gap-2">
                <button className="bg-fuchsia-500 text-white px-3 py-1 rounded-md hover:bg-fuchsia-600">
                  <FaUserEdit className="inline mb-[5px]" /> Edit
                </button>

                {user.isBlocked ? (
                  <button
                    onClick={() => BlockUser(user._id, user.isBlocked)}
                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-800"
                  >
                    <CgUnblock className="inline mb-[4px]" /> Unblock
                  </button>
                ) : (
                  <button
                    onClick={() => BlockUser(user._id, user.isBlocked)}
                    className="bg-rose-500 text-white px-3 py-1 rounded-md hover:bg-rose-600"
                  >
                    <CgBlock className="inline mb-[4px]" /> Block
                  </button>
                )}

                <button
                  onClick={() => navigate(`/view-user/${user._id}`)}
                  className="bg-teal-500 text-white px-3 py-1 rounded-md hover:bg-teal-600"
                >
                  <LiaStreetViewSolid className="inline mb-[5px]" /> View
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Users;
