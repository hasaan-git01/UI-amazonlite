import React from "react";
import pak from "../assets/pak.png";
import amz from "../assets/amz.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="z-50">
        <div
          className="text-center bg-slate-600 h-[40px] text-gray-300 cursor-pointer pt-3 text-xs hover:underline"
          onClick={scrollToTop}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") scrollToTop();
          }}
        >
          Back to top
        </div>
        <footer className="bg-slate-800 text-gray-300 text-sm">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-gray-700">
            <div>
              <h4 className="font-bold mb-2">Get to Know Us</h4>
              <ul className="space-y-1">
                {[
                  
                  "About Amazon Lite",
                  "Investor Relations",
                  "Amazon Lite Devices",
                  "Amazon Lite Science",
                ].map((item) => (
                  <li key={item} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">Make Money with Us</h4>
              <ul className="space-y-1">
                {[
                  "Sell products on Amazon Lite",
                  "Sell on Amazon Lite Business",
                  "Sell apps on Amazon Lite",
                  "Become an Affiliate",
                  "Advertise Your Products",
                   
                ].map((item) => (
                  <li key={item} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">Amazon Lite Payment Products</h4>
              <ul className="space-y-1">
                {[
                  "Amazon Business Card",
                  "Shop with Points",
                  "Reload Your Balance",
                  "Amazon Currency Converter",
                ].map((item) => (
                  <li key={item} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">Let Us Help You</h4>
              <ul className="space-y-1">
                {[
                   
                  "Your Account",
                  "Your Orders",
                  "Shipping Rates & Policies",
                  "Returns & Replacements",
                   
                  "Help",
                ].map((item) => (
                  <li key={item} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 border-b border-gray-700">
            <img src={amz} alt="amazon logo" className="h-14" />
            <button className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-1 rounded flex items-center space-x-2">
              <span className="material-icons text-sm">language</span>
              <span>English</span>
              <svg
                className="w-4 h-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-1 rounded flex items-center space-x-2">
              <pre>R.s PKR - Pakistani-Rupees</pre>
              <svg
                className="w-4 h-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-1 rounded flex items-center space-x-2">
              <img
                src={pak}
                alt="Pakistan  "
                className="w-5 h-4 object-cover"
              />
              <span>Pakistan</span>
            </button>
          </div>
        </footer>
        <div className="bg-slate-900 text-gray-300 text-sm">
          <div className=" bg-slate-900 h-[300px] max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-6 gap-8 text-xs text-gray-400">
            <div>
              <h5 className="font-semibold text-gray-300 mb-1">
                Amazon Lite Music
              </h5>
              <p>Stream millions of songs</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-300 mb-1">
                Amazon Lite Ads
              </h5>
              <p>Reach customers wherever they spend their time</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-300 mb-1">6pm</h5>
              <p>Score deals on fashion brands</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-300 mb-1">AbeBooks</h5>
              <p>Books, art & collectibles</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-300 mb-1">ACX</h5>
              <p>Audiobook Publishing Made Easy</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-300 mb-1">
                Sell on Amazon Lite
              </h5>
              <p>Start a Selling Account</p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-300 mb-1">
                Amazon Lite Business
              </h5>
              <p>Everything For Your Business</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-300 mb-1">
                Amazon Lite Global
              </h5>
              <p>Ship Orders Internationally</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-300 mb-1">
                Amazon Lite Web Services
              </h5>
              <p>Scalable Cloud Computing Services</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-300 mb-1">Audible</h5>
              <p>Listen to Books & Original Audio Performances</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-300 mb-1">
                Box Office Mojo
              </h5>
              <p>Find Movie Box Office Data</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-300 mb-1">Goodreads</h5>
              <p>Book reviews & recommendations</p>
            </div>
 
            
            
           
          </div>

          <div className="text-center h-[100px] text-gray-500 text-xs py-4 px-6 border-t border-gray-700">
            <p>
              Conditions of Use &nbsp;&nbsp; Privacy Notice &nbsp;&nbsp;
              Consumer Health Data Privacy Disclosure &nbsp;&nbsp; Your Ads
              Privacy Choices &nbsp;&nbsp;{" "}
              <input
                type="checkbox"
                checked
                readOnly
                className="inline-block align-middle"
              />
            </p>
            <p className="mt-1">
              © 1996-2025,Amazonlite.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
