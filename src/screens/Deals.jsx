// import React from 'react'

// const Deals = () => {

// const upcomingDeals = [
//     { id: 1, title: "Super Gadget", description: "Discount coming soon!", image: "/placeholder1.jpg" },
//     { id: 2, title: "Amazing Headphones", description: "Deal available soon!", image: "/placeholder2.jpg" },
//     { id: 3, title: "Smart Watch", description: "Stay tuned for a special offer!", image: "/placeholder3.jpg" },
//     { id: 4, title: "Gaming Laptop", description: "Coming soon!", image: "/placeholder4.jpg" },
//   ];

//   return (
//     <>
//      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
//       <h1 className="text-4xl font-bold text-gray-800 mb-6">Deals</h1>
//       <p className="text-gray-600 text-lg mb-10 text-center max-w-xl">
//         Currently, there are no active deals. Check back soon for amazing discounts!
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
//         {upcomingDeals.map((deal) => (
//           <div
//             key={deal.id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
//           >
//             <div className="h-48 bg-gray-200 flex items-center justify-center">
//               <img
//                 src={deal.image}
//                 alt={deal.title}
//                 className="object-cover h-full w-full"
//               />
//             </div>
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800">{deal.title}</h2>
//               <p className="text-gray-500 mt-2">{deal.description}</p>
//             </div>
//             <div className="bg-yellow-100 text-yellow-800 text-center py-2 font-medium">
//               Coming Soon
//             </div>
//           </div>
//         ))}
//       </div>

//       <p className="mt-12 text-gray-500 text-sm">
//         Stay tuned! We update deals every week.
//       </p>
//     </div>
//     </>
//   )
// }

// export default Deals
import React from "react";

const Deals = () => {
  const upcomingDeals = [
    {
      id: 1,
      title: "Super Gadget",
      description: "Discount coming soon!",
      image: "/placeholder1.jpg",
    },
    {
      id: 2,
      title: "Amazing Headphones",
      description: "Deal available soon!",
      image: "/placeholder2.jpg",
    },
    {
      id: 3,
      title: "Smart Watch",
      description: "Stay tuned for a special offer!",
      image: "/placeholder3.jpg",
    },
    {
      id: 4,
      title: "Gaming Laptop",
      description: "Coming soon!",
      image: "/placeholder4.jpg",
    },
    {
      id: 5,
      title: "Designer Dress",
      description: "Exclusive fashion deal coming soon!",
      image: "/placeholder5.jpg",
    },
    {
      id: 6,
      title: "Leather Jacket",
      description: "Stay tuned for amazing discounts!",
      image: "/placeholder6.jpg",
    },
    {
      id: 7,
      title: "Gold Necklace",
      description: "Jewelry deal available soon May Be!",
      image: "/placeholder7.jpg",
    },
    {
      id: 8,
      title: "Silver Earrings",
      description: "Special offer coming soon May Be!",
      image: "/placeholder8.jpg",
    },
    {
      id: 9,
      title: "Casual Shoes",
      description: "Check back soon for a deal!",
      image: "/placeholder9.jpg",
    },
    {
      id: 10,
      title: "Sports Watch",
      description: "Discount coming soon!",
      image: "/placeholder10.jpg",
    },
    {
      id: 11,
      title: "Handbag",
      description: "Exclusive offer coming soon!",
      image: "/placeholder11.jpg",
    },
    {
      id: 12,
      title: "Sunglasses",
      description: "Deal available soon!",
      image: "/placeholder12.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-300 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Deals</h1>
      <p className="text-gray-600 text-lg mb-10 text-center max-w-xl">
        Currently, there are no active deals. Check back soon for amazing
        discounts!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {upcomingDeals.map((deal) => (
          <div
            key={deal.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src={deal.image}
                alt={deal.title}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {deal.title}
              </h2>
              <p className="text-gray-500 mt-2">{deal.description}</p>
            </div>
            <div className="bg-yellow-100 text-yellow-800 text-center py-2 font-medium">
              Coming Soon
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-gray-500 text-md">
        Stay tuned! We update deals every week.
      </p>
    </div>
  );
};

export default Deals;
