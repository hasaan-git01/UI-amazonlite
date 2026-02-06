import React from "react";
import glb from "../img/glb.png";
import shr from "../img/shr.png";
import ref from "../img/ref.png";
import gft from "../img/gft.png";
import eve from "../img/eve.png";
import wed from "../img/wed.png";

const Registery = () => {
  return (
    <>
      <div className="bg-white px-6 py-10 max-w-full">
        <div className="text-3xl text-blue-400 bold font-bold m-5">
          Registery & Gifting
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">
              Inspiration for life's biggest moments
            </h2>

            <p className="text-gray-600 mt-2">
              For weddings, birthdays, or any life event, registries and gift
              lists ensure the perfect item.
            </p>

            <div className="mt-6">
              <div className="border rounded-full flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100">
                <span className="text-gray-700">Find a registry</span>
                <span className="text-lg">{">"}</span>
              </div>

              <button className="bg-yellow-400 hover:bg-yellow-500 w-full rounded-full py-2 mt-3 font-semibold">
                Create
              </button>
            </div>
          </div>

          <div className="border rounded-lg shadow-sm overflow-hidden cursor-pointer">
            <div className="w-full h-44 bg-gray-200">
              <img src={eve} alt="baby" className="w-full h-44 object-cover" />
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg"> Register your Event Here</h3>
              <p className="text-gray-600 text-sm">
                Get help preparing for your new Event.
              </p>
            </div>
          </div>

          <div className="border rounded-lg shadow-sm overflow-hidden cursor-pointer">
            <div className="w-full h-44 bg-gray-200">
              <img
                src={wed}
                alt="wedding"
                className="w-full h-44 object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg">Wedding Registry</h3>
              <p className="text-gray-600 text-sm">
                Register for gifts to start your new chapter.
              </p>
            </div>
          </div>

          <div className="border rounded-lg shadow-sm overflow-hidden cursor-pointer">
            <div className="w-full h-44 bg-gray-200">
              <img src={gft} alt="gift" className="w-full h-44 object-cover" />
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg">Gift List</h3>
              <p className="text-gray-600 text-sm">
                Share gift ideas or needs for birthdays, holidays, graduations,
                new homes and more.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">
          Reasons to register with Amazon
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-8 text-center shadow-sm">
            <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 rounded-full">
              <img src={glb} alt="earth icon" className="mx-auto w-12 mb-4" />
            </div>

            <h3 className="font-semibold text-lg">Earth's biggest selection</h3>
            <p className="text-gray-600 text-sm mt-1">
              Add items from Amazon to create a gift registry for any occasion.
            </p>
          </div>

          <div className="border rounded-lg p-8 text-center shadow-sm">
            <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 rounded-full">
              <img src={shr} alt="gift icon" className="mx-auto w-12 mb-4" />
            </div>

            <h3 className="font-semibold text-lg">Easy to share</h3>
            <p className="text-gray-600 text-sm mt-1">
              Share your gift registry with friends and family so they'll know
              exactly what gifts to get.
            </p>
          </div>

          <div className="border rounded-lg p-8 text-center shadow-sm">
            <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 rounded-full">
              <img src={ref} alt="returns icon" className="mx-auto w-12 mb-4" />
            </div>

            <h3 className="font-semibold text-lg">Extended returns</h3>
            <p className="text-gray-600 text-sm mt-1">
              Not quite right? Registry gifts have an extended return period.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registery;
