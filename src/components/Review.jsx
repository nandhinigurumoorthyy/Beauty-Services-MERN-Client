import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiWhatsappLogo, PiMetaLogo, PiYoutubeLogo, PiInstagramLogo } from "react-icons/pi";

import review1 from "../assets/review1.JPG";
import review2 from "../assets/review2.JPG";
import review3 from "../assets/review3.JPG";
import review4 from "../assets/review4.JPG";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
<div className="px-4 sm:px-10 md:px-20 lg:px-28 pt-20 pb-10 bg-stone-200 flex flex-col md:flex-row gap-7 items-center">
  {/* Left Section - Customer Reviews Info */}
  <div className="w-full md:w-1/2 flex flex-col gap-3 text-center md:text-left">
    <p className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-semibold pb-2">
      Love from our customers
    </p>
    <p className="text-4xl sm:text-5xl">⭐ 4.5</p>
    <p className="text-lg sm:text-xl md:text-2xl text-gray-500">49.6K reviews</p>

    {/* Social Links */}
    <div className="mt-4">
      <p className="text-lg font-semibold">Let's Get Social</p>
      <div className="flex justify-center md:justify-start gap-4 text-2xl mt-2">
        <PiWhatsappLogo />
        <PiMetaLogo />
        <PiYoutubeLogo />
        <PiInstagramLogo />
      </div>
    </div>
  </div>

  {/* Right Section - Review Slider */}
  <div className="w-full md:w-1/2">
    <Slider {...settings} className="w-full mx-auto">
      {[review1, review2, review3, review4].map((img, index) => (
        <div key={index}>
          <img
            src={img}
            alt={`Review ${index + 1}`}
            className="rounded-2xl w-full h-40 sm:h-56 md:h-64 object-fill"
          />
        </div>
      ))}
    </Slider>
  </div>
</div>

  );
};

export default Review;
