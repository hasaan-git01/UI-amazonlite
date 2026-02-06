import React from "react";

const Profile = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center pt-10 mb-8">
        <div className="w-[900px] flex flex-col p-6 bg-sky-300 rounded-tl-xl rounded-tr-xl items-center">
          <div className="w-28 h-28 rounded-full mt-10 bg-gray-300 border-2 border-gray-500 overflow-hidden">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-white font-semibold">
            email: example@gmail.com
          </p>
        </div>

        <div className="w-[900px] bg-sky-300 px-12 pb-12 pt-6  shadow-lg flex justify-between ">
          <div className="w-1/2 pr-4">
            <div className="mb-3">
              <label className="font-semibold">First Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg border"
              />
            </div>

            <div className="mb-3">
              <label className="font-semibold">Last Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg border"
              />
            </div>

            <div className="mb-3">
              <label className="font-semibold">User Name</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 rounded-lg border"
              />
            </div>

            <div className="mb-3">
              <label className="font-semibold">Mobile Number</label>
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full p-3 rounded-lg border"
              />
            </div>

            <div className="mb-3">
              <label className="font-semibold">Date of Birth</label>
              <input type="date" className="w-full p-3 border rounded-lg" />
            </div>
          </div>

          <div className="w-1/2 pl-4">
            <div className="mb-3">
              <label className="font-semibold">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="flex gap-4 mb-3 mt-4">
              <input
                type="text"
                placeholder="City"
                className="w-1/2 p-3 rounded-lg border"
              />
              <input
                type="text"
                placeholder="State"
                className="w-1/2 p-3 rounded-lg border"
              />
            </div>

            <div className="mb-3 mt-[34px]">
              <label className="font-semibold">Zip Code</label>
              <input
                type="text"
                placeholder="00000"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="mb-3">
              <label className="font-semibold">Gender</label>
              <select className="w-full p-3 border rounded-lg">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">Role</label>
              <select className="w-full p-3 border rounded-lg">
                <option>Buyer</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-[900px] h-[100px] flex flex-col bg-sky-300 rounded-bl-xl rounded-br-xl items-center justify-start px-6 pt-0">
          <button className="text-[20px] font-thin bg-green-400 hover:bg-green-500 w-[400px] border rounded-lg p-2 mt-0">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
