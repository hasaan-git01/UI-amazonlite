import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Apis from "../Config/Apis";
import { errorToastify } from "../Messages/Toastify";
import Loader from "../layouts/Loader";
import { IoArrowBack } from "react-icons/io5";

const ViewUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${Apis.auth}/get/${id}`);

        if (data.ok) {
          setUser(data.user);
        } else {
          errorToastify(data.error || "Failed to fetch user details");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        errorToastify("Failed to load user details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUserDetails();
    }
  }, [id]);

  if (loading) return <Loader />;

  if (!user) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="text-xl text-red-500">User not found</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">User Details</h1>
          <button
            onClick={() => navigate("/users")}
            className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 flex items-center gap-2"
          >
            <IoArrowBack /> Back to Users
          </button>
        </div>

        <div className="bg-white rounded-md shadow-lg overflow-hidden">
          <div className="bg-blue-400 text-white p-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-400 text-3xl font-bold">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-blue-100">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4 font-semibold text-gray-700 w-1/3 bg-gray-50">
                    Full Name
                  </td>
                  <td className="py-4 px-4 text-gray-800">{user.name}</td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-4 font-semibold text-gray-700 bg-gray-50">
                    Email Address
                  </td>
                  <td className="py-4 px-4 text-gray-800">{user.email}</td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-4 font-semibold text-gray-700 bg-gray-50">
                    Role
                  </td>
                  <td className="py-4 px-4">
                    <span className="bg-blue-400 text-white px-3 py-1 rounded-md capitalize">
                      {user.role}
                    </span>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-4 font-semibold text-gray-700 bg-gray-50">
                    Account Status
                  </td>
                  <td className="py-4 px-4">
                    {user.isBlocked ? (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-md">
                        Blocked
                      </span>
                    ) : (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-md">
                        Active
                      </span>
                    )}
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-4 font-semibold text-gray-700 bg-gray-50">
                    User ID
                  </td>
                  <td className="py-4 px-4 text-gray-600 font-mono text-sm">
                    {user._id}
                  </td>
                </tr>

                {user.createdAt && (
                  <tr className="border-b">
                    <td className="py-4 px-4 font-semibold text-gray-700 bg-gray-50">
                      Account Created
                    </td>
                    <td className="py-4 px-4 text-gray-800">
                      {new Date(user.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                )}

                {user.updatedAt && (
                  <tr>
                    <td className="py-4 px-4 font-semibold text-gray-700 bg-gray-50">
                      Last Updated
                    </td>
                    <td className="py-4 px-4 text-gray-800">
                      {new Date(user.updatedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
