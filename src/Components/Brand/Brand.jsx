import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/images/brands/b1.png";
import img2 from "../../assets/images/brands/b2.png";
import img3 from "../../assets/images/brands/b3.png";
import img4 from "../../assets/images/brands/b4.png";
import img5 from "../../assets/images/brands/b5.png";
import { UpdateFollower } from 'react-mouse-follower';

const settings = {
  infinite: true,
  speed: 3000, // Adjust this for the speed of the scrolling
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // Set to 0 for continuous scrolling
  arrows: false,
  cssEase: 'linear', // Ensure smooth scrolling
  pauseOnHover: false, // Continue scrolling even when hovered
  responsive: [
    {
      breakpoint: 1200, // For screens less than 1200px wide
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992, // For screens less than 992px wide
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // For screens less than 768px wide
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // For screens less than 480px wide
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const Brand = () => {
  return (
    <section className="bg-gray-200">
        <div className='bg-gray-200'>
      <div className="container  ">
        <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
        <Slider {...settings} className="brand-slider flex justify-center items-center">

          <div className="flex justify-center items-center p-4">
            <img src={img1} alt="Brand 1" className="h-[100px] w-[100px]" />
          </div>
          <div className="flex justify-center items-center p-4">
            <img src={img2} alt="Brand 2" className="h-[100px] w-[100px]" />
          </div>
          <div className="flex justify-center items-center p-4">
            <img src={img3} alt="Brand 3" className="h-[100px] w-[100px]" />
          </div>
          <div className="flex justify-center items-center p-4">
            <img src={img4} alt="Brand 4" className="h-[100px] w-[100px]" />
          </div>
          <div className="flex justify-center items-center p-4">
            <img src={img5} alt="Brand 5" className="h-[100px] w-[100px]" />
          </div>
         
          <div className="flex justify-center items-center p-4">
            <img src={img1} alt="Brand 1" className="h-[100px] w-[100px]" />
          </div>
          <div className="flex justify-center items-center p-4">
            <img src={img2} alt="Brand 2" className="h-[100px] w-[100px]" />
          </div>
          <div className="flex justify-center items-center p-4">
            <img src={img3} alt="Brand 3" className="h-[100px] w-[100px]" />
          </div>
          <div className="flex justify-center items-center p-4">
            <img src={img4} alt="Brand 4" className="h-[100px] w-[100px]" />
          </div>
          <div className="flex justify-center items-center p-4">
            <img src={img5} alt="Brand 5" className="h-[100px] w-[100px]" />
          </div>
        </Slider>
          </UpdateFollower>
      </div>
      </div>
    </section>
  );
};

export default Brand;
