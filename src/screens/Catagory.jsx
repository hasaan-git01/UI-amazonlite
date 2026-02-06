import React from "react";
import { Link } from "react-router-dom";

import beauty from "../cata/beauty.png";
import electronic from "../cata/electronic.png";
import entertainments from "../cata/entertainments.png";
import grocery from "../cata/grocery.png";
import health from "../cata/health.png";
import home from "../cata/home.png";
import jewlery from "../cata/jewlery.png";
import kitchen from "../cata/kitchen.png";
import men from "../cata/men.png";
import pc from "../cata/pc.png";
import sports from "../cata/sports.png";
import toys from "../cata/toys.png";
import women from "../cata/women.png";
import mobile from "../cata/mobile.png";
import furniture from "../cata/furniture.png";
import carbike from "../cata/carbike.png";

const categories = [
  {
    name: "Beauty & Cosmetic",
    image: beauty,
    key: ["beauty"],
    key: ["fragrances"],
  },
  { name: "Groceries & Essentials", image: grocery, key: ["groceries"] },
  {
    name: "Home Decoration & Essentials",
    image: home,
    key: ["home-decoration"],
  },
  { name: "Jewellery", image: jewlery, key: ["womens-jewellery"] },
  { name: "Kitchen Accessories", image: kitchen, key: ["kitchen-accessories"] },
  {
    name: "Mens Fashion",
    image: men,
    key: ["mens-shirts"],
    key: ["mens-shoes"],
    key: ["mens-watches"],
    key: ["sunglasses"],
  },
  {
    name: "Women Fashion",
    image: women,
    key: ["womens fashion"],
    key: ["skin-care"],
    key: ["sunglasses"],
    key: ["womens-bags"],
    key: ["womens-dresses"],
    key: ["womens-shoes"],
    key: ["womens-watches"],
  },
  { name: "PC & Laptops", image: pc, key: ["pc-laptops"], key: ["tablets"] },
  { name: "Sports & Outdoors", image: sports, key: ["sports-accessories"] },
  { name: "Health & Wellness", image: health, key: ["health"] },
  { name: "Kids , Baby & Toys,", image: toys, key: ["tops"] },
  {
    name: "Mobile Phones & Accessories",
    image: mobile,
    key: ["smartphones"],
    key: ["mobile-accessories"],
  },
  { name: "Furniture", image: furniture, key: ["furniture"] },
  { name: "Vehicle", image: carbike, key: ["vehicle"], key: ["motorcycle"] },
  { name: "Electronics", image: electronic, key: ["electronics"] },
  { name: "Entertainment", image: entertainments, key: ["entertainment"] },
];

const Catagory = () => {
  return (
    <div className="bg-white p-6">
      <h1 className="text-slate-950 text-4xl font-semibold text-center mb-12">
        Top Categories
      </h1>

      <div className="flex flex-wrap justify-center gap-12 mb-[200px]">
        {categories.map((cat) => (
          <Link
            to={`/category/${cat.key}`}
            key={cat.key}
            className="w-[360px] h-[480px] shadow-lg rounded-xl overflow-hidden flex flex-col bg-white cursor-pointer hover:scale-105 transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-[360px] h-[360px] p-2 object-cover"
            />
            <div className="p-2 flex flex-col justify-between flex-1">
              <h2 className="text-xl font-semibold text-gray-800">
                {cat.name}
              </h2>
            </div>
            <div className="flex justify-center hover:animate-pulse w-[360px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                className="stroke-blue-400 mb-3"
              >
                <g transform="scale(-1,1) translate(-24,0)">
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M11 6L5 12M5 12L11 18M5 12H19"
                  ></path>
                </g>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
