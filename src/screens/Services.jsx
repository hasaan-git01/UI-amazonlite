import React from "react";
import { Link } from "react-router-dom";
import prim from "../assets/prim.png";
import box from "../assets/box.png";
import tab from "../assets/tab.png";
import assi from "../assets/assi.png";
import pay from "../assets/pay.png";

const Services = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <main className="bg-teal-600 p-6 text-white flex flex-col items-center justify-center h-[600px]">
          <h1 className="text-2xl font-semibold mb-2 ">
            Welcome to Amazon Lite Customer Service
          </h1>
          <p className="mb-[60px] text-sm font-normal ">
            We can help you take care of most things here, sign in to get
            started.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl">
            <Link
              to="/broken-link"
              className="bg-white text-black rounded-md px-6 py-4 flex items-center space-x-3 shadow"
            >
              <img src={box} alt="box icon" className="w-8" />
              <span>A delivery, order or return</span>
            </Link>

            <Link
              to="/broken-link"
              className="bg-white text-black rounded-md px-6 py-4 flex items-center space-x-3 shadow"
            >
              <div className="bg-teal-500 rounded-full p-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 14l2-2-2-2" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <span>Help with signing in</span>
            </Link>

            <Link
              to="/broken-link"
              className="bg-white text-black rounded-md px-6 py-4 flex items-center space-x-3 shadow"
            >
              <img src={prim} alt="prime" className="w-16" />
              <span>Prime</span>
            </Link>

            <Link
              to="/broken-link"
              className="bg-white text-black rounded-md px-6 py-3 flex items-center space-x-3 shadow"
            >
              <img src={tab} alt="kindle" className="w-10" />
              <span>Kindle, Fire, Alexa, or other Amazon Lite devices</span>
            </Link>

            <Link
              to="/broken-link"
              className="bg-white text-black rounded-md px-6 py-3 flex items-center space-x-3 shadow"
            >
              <svg
                className="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M12 3v3M16 7l-4 4-4-4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              <span>eBooks, Prime Videos, Music, or Games</span>
            </Link>

            <Link
              to="/broken-link"
              className="bg-white text-black rounded-md px-6 py-3 flex items-center space-x-3 shadow"
            >
              <img src={pay} alt="payment" className="w-12" />
              <span>Payment, charges or gift cards</span>
            </Link>

            <Link
              to="/broken-link"
              className="bg-white text-black rounded-md px-6 py-3 flex items-center space-x-3 shadow"
            >
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8v8" />
              </svg>
              <span>Address, security & privacy</span>
            </Link>

            <Link
              to="/broken-link"
              className="bg-white text-black rounded-md px-6 py-3 flex items-center space-x-3 shadow"
            >
              <svg
                className="w-8 h-8 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a6 6 0 100 12 6 6 0 000-12z" />
                <path d="M6 18v2h12v-2a6 6 0 00-12 0z" />
              </svg>
              <span>Memberships, subscriptions or communications</span>
            </Link>

            <Link
              to="/broken-link"
              className="bg-white text-black rounded-md px-6 py-3 flex items-center space-x-3 shadow"
            >
              <img src={assi} alt="box icon" className="w-8" />
              <span>Accessibility</span>
            </Link>

            <Link
              to="/broken-link"
              className="bg-white text-black rounded-md px-6 py-4 flex items-center space-x-3 shadow"
            >
              <div className="text-teal-300 text-2xl font-semibold">?</div>
              <span>Something else</span>
            </Link>

            <Link
              to="/broken-link"
              className="bg-white text-black rounded-md px-6 py-4 flex items-center space-x-3 shadow"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <span>Report Something Suspicious</span>
            </Link>
          </div>
        </main>

        <section className="max-w-5xl mx-auto px-6 py-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mb-6"
            aria-label="Search help library"
          >
            <input
              type="text"
              placeholder='Type something like, "question about a charge"'
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </form>

          <h2 className="font-bold text-lg mb-2">All help topics</h2>
          <div className="flex gap-4 flex-wrap text-sm font-semibold mb-6">
            <button className="bg-teal-700 text-white px-4 py-1 rounded">
              Take Quick Actions
            </button>
            <button className="hover:underline">Take Quick Actions</button>
            <button className="hover:underline">Where's my stuff</button>
            <button className="hover:underline">Shipping and Delivery</button>
            <button className="hover:underline">
              Returns, Refunds and Product Support
            </button>
            <button className="hover:underline">Managing Your Account</button>
            <button className="hover:underline">Security & Privacy</button>
            <button className="hover:underline">
              Payment, Pricing and Promotions
            </button>
            <button className="hover:underline">
              Devices & Digital Solutions
            </button>
            <button className="hover:underline">
              Amazon Lite Business Accounts
            </button>
            <button className="hover:underline">
              Large Items and Heavy-Bulky Services
            </button>
            <button className="hover:underline">
              Other topics & Help sites
            </button>
          </div>

          {/* Help cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="border border-gray-300 rounded-md p-4">
              <h3 className="font-semibold">Track your package</h3>
              <p className="text-xs">Track your packages in Your Orders.</p>
            </div>

            <div className="border border-gray-300 rounded-md p-4">
              <h3 className="font-semibold">Return Items You Ordered</h3>
              <p className="text-xs">
                Return your orders using our Online Return Center.
              </p>
            </div>

            <div className="border border-gray-300 rounded-md p-4">
              <h3 className="font-semibold">Check status of a refund</h3>
              <p className="text-xs">
                Track your return and refunds in Your Orders.
              </p>
            </div>

            <div className="border border-gray-300 rounded-md p-4">
              <h3 className="font-semibold">Track Your Return</h3>
              <p className="text-xs">
                Learn how to track your return location and status.
              </p>
            </div>

            <div className="border border-gray-300 rounded-md p-4">
              <h3 className="font-semibold">
                Manage Your Amazon Prime Membership
              </h3>
              <p className="text-xs">
                Cancel your membership easily on this page.
              </p>
            </div>

            <div className="border border-gray-300 rounded-md p-4">
              <h3 className="font-semibold">
                How to Update Your Amazon Payment Method
              </h3>
              <p className="text-xs">
                Keeping your payment methods up to date prevents purchase and
                digital service interruptions.
              </p>
            </div>

            <div className="border border-gray-300 rounded-md p-4 col-span-full">
              <h3 className="font-semibold">Get Product Support</h3>
              <p className="text-xs">
                We provide free product support when you need help using a
                product or if it doesn’t work correctly.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
