// import React from 'react'
// import { RxStarFilled } from "react-icons/rx";
// import { IoStarHalfOutline } from "react-icons/io5";
// import { IoStarOutline } from "react-icons/io5";
// import { array } from 'yup';

// const Rating = ({rating}) => {
//   const fullstar = Math.floor(rating)
//   const halfstar = rating % 1 >= 0.5
//   const emptystar = 5-fullstar - (halfstar? 1: 0)
//   return (
//     <div className='flex items-center  gap-2'>

//       {Array(fullstar).fill(
//        <RxStarFilled className="text-yellow-400"/>

//       ) }
//       {
//         halfstar &&<IoStarHalfOutline className="text-yellow-400"/>

//       }
//       {Array(emptystar).fill(
//        <IoStarOutline className="text-yellow-400"/>

//       )}

//     </div>
//   )
// }

// export default Rating

import React from "react";
import { RxStarFilled } from "react-icons/rx";
import { IoStarHalfOutline, IoStarOutline } from "react-icons/io5";

const Rating = ({ rating }) => {
  const safeRating = Number(rating) || 0;

  const fullstar = Math.floor(safeRating);
  const halfstar = safeRating % 1 >= 0.5;
  const emptystar = 5 - fullstar - (halfstar ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      {[...Array(fullstar)].map((_, i) => (
        <RxStarFilled key={`full-${i}`} className="text-yellow-400" />
      ))}

      {halfstar && <IoStarHalfOutline className="text-yellow-400" />}

      {[...Array(emptystar)].map((_, i) => (
        <IoStarOutline key={`empty-${i}`} className="text-yellow-400" />
      ))}
    </div>
  );
};

export default Rating;
