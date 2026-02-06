import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link, Route } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


import Img1 from '../assets/1.png';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.png';
import Img4 from '../assets/4.jpg';
import Img5 from '../assets/5.png';
import amz from '../assets/amz.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: Img1,
      buttonText: 'View Deals',
      link: "/category/kitchen-accessories",
       
      
    },
    {
      id: 2,
      image: Img2,
       buttonText: 'View Deals',
      link: "/deals",
    },
    {
      id: 3,
      image: Img3,
       buttonText: 'View Deals',
      link: "/category/tablets", 
    },
    {
      id: 4,
      image: Img4,
       buttonText: 'View Deals',
      link: "/category/beauty",
    },
     
  ];

  return (
    <div className="w-full bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper "
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-[1550px] h-[400px] md:h-[630px] overflow-hidden">
              {/* Background Image with Overlay */}
               <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} opacity-60`}></div>
              </div>
               {/* Content */}
              <div className="relative h-full flex items-center justify-center text-center px-4">
                <div className="max-w-3xl">
                   
                  <Link to={slide.link}>
                    <button className="bg-transparent text-white pl-8 pr-4 text-[25px] mt-44 font-thin py-3 rounded-md text-lg transition-all hover:scale-105 shadow-lg">
                      {slide.buttonText}<MdKeyboardDoubleArrowRight className='inline text-2xl m-2'/>
                    </button>
                  </Link>
              <img
              className="h-13 w-[300px] text-center mt-12 cursor-pointer rounded-sm border border-transparent hover:border-gray-400 transition-all duration-100 "
              src={amz}
              alt="Site logo"
              title="Amazon Lite"
            />
                          </div>
              </div>
            </div>  
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS for navigation buttons */}
      <style jsx>{`
        .hero-swiper {
          --swiper-navigation-size: 34px;
          --swiper-navigation-color: white;
          --swiper-pagination-color: white;
          --swiper-pagination-bullet-inactive-color: rgba(255, 255, 255, 0.5);
        }
        
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          background: rgba(0, 0, 0, 0.3);
          width: 40px;
          height: 40px;
          
          border-radius: 50%;
          padding: 10px;
        }
        
        .hero-swiper .swiper-button-next:hover,
        .hero-swiper .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.5);
        }

        .hero-swiper .swiper-pagination {
          bottom: 20px;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;