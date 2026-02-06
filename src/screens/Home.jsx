import React, { useState } from 'react';
  


import card from '../assets/card.png';  
import cata from '../assets/cata.png';  
import disc from '../assets/disc.png';  

import HeroCarousel from './HeroCarousel';

 const Home = () => {
  return (
    <>
     <HeroCarousel />
       <div className="min-h-screen bg-gray-200 flex flex-col items-center py-12 px-4">
       <div className="max-w-7xl mx-auto px-2 pb-6 pt-2 bg-gray-200 w-full">
       
             <div className="bg-gray-100 flex justify-center items-center min-h-screen">
    
    {/* <!-- Main Container --> */}
    <div className="w-[1600px] h-[900px] border-4  p-6 flex gap-6">
      
      {/* <!-- Left Section (img1 + img2) --> */}
      <div className="flex flex-col gap-12 flex-1">
        
        {/* <!-- img 1 --> */}
        <div className="flex-1  flex items-center justify-center">
          <a href="/category">
          <img
              className="justify-start w-[1000px] cursor-pointer rounded-sm hover:scale-105 transition-all duration-200 
               border-4 border-gray-400 "
              src={cata}
              
            />
            </a>
        </div>

        {/* <!-- img 2 --> */}
        <div className="flex-1  flex items-center justify-center">
           <a href="/discover">
          <img
              className="justify-start w-[850px] h-[400px] -bottom-36 cursor-pointer rounded-sm hover:scale-105 transition-all duration-200 border-4 border-gray-400  "
              src={disc}
              
            />
            </a> 
        </div>

      </div>

      {/* <!-- Right Section (img3) --> */}
      <div className="w-[350px] ml-5 flex items-center justify-center">
         <a href="/deals">
          <img
              className="justify-end w-[400px] cursor-pointer rounded-sm border-4 border-gray-400 hover:scale-105 transition-all duration-200 "
              src={card}
              
            />
            </a>
      </div>

    </div>

  </div>
       </div>
       </div>
    </>
  );
};

export default Home;
