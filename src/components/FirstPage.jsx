import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";

// Import your slider images
import Image1 from "../assets/pic1.jpg";
import Image2 from "../assets/pic2.jpg";
import Image3 from "../assets/pic3.jpg";
import Image4 from "../assets/pic4.jpg";
import Image5 from "../assets/pic5.jpg";

const images = [Image1, Image2, Image3, Image4, Image5];

const FirstPage = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="flex flex-col md:flex-col h-screen overflow-hidden bg-stone-200 gap-4 lg:gap-8 md:gap-8">
      {/* Top side - Image Slider */}
      <div className=" w-full h-3/5 sm:h-1/2 relative overflow-hidden flex justify-center items-center">
        {/* Background Color Bar (only height h-72 and full width) */}
        <div
          className="absolute  h-72 w-full "
        
        ></div>

        {/* Full Height Image Slider */}
        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out relative z-10"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain flex-shrink-0"
            />
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full 
                ${current === index ? "bg-white" : "bg-gray-500"} 
                w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 
                transition-all duration-300 ease-in-out cursor-pointer hover:scale-110
              `}
              
            ></button>
          ))}
        </div>
      </div>

      {/* Bottom side - Content */}
      <div className="flex justify-center  h-2/5 items-center w-full ">
        <div
          className="flex justify-center items-center relative w-full h-72 px-2 md:px-0"

        >
     
          {/* Foreground Content */}
          <div className="flex flex-col items-center justify-center w-full  gap-3 mb-10 h-2/5">
            {/* Title with Logo - Centered */}
            <div className="h-20 w-[230px]">
            <div className="winky-sans-regular flex gap-2 text-4xl md:text-5xl items-center justify-center animate-fadeInUp">
            <span className="text-red-950 ">
        GLAM</span>
        <span className="text-gray-600">ON</span>
        <span className="text-red-950 ">GO</span>
            </div>

            {/* Right-Aligned Welcome Message */}
            <div className="w-full animate-fadeInUp delay-200 ">
              <h3 className="flex justify-end">
                <span className="text-xs italic">
                Beauty at Your Doorstep!! </span><span className="text-xs"> ❤️
                </span>
              </h3>
            </div>
            </div>

            {/* Tagline */}
            <div className="text-lg text-center animate-fadeInUp delay-500">
              <p>Your appointment awaits — book moments that matter...</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6 flex-wrap justify-center animate-fadeInUp delay-700">
              <Link
                to="/create"
                className="rounded-md px-3 py-2 text-lg border-2 border-red-950 hover:rounded-xl  flex gap-2 items-center no-underline justify-center hover:text-white hover:bg-red-950"
              >
          
                SignUp
              </Link>
              <Link
                to="/login"
                className="px-3 py-2 text-lg border-2 border-red-950 rounded-md hover:rounded-xl flex gap-2 items-center no-underline justify-center hover:text-white hover:bg-red-950"
              >
  
                LogIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
