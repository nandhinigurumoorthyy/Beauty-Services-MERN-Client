import React from "react";
import fr1 from "../assets/footer/img1.jpg";
import fr2 from "../assets/footer/img2.jpg";
import fr3 from "../assets/footer/img3.jpg";
import fr4 from "../assets/footer/img4.jpg";
import fr5 from "../assets/footer/img5.PNG";
import fr6 from "../assets/footer/img6.jpg";


const FooterContent = () => {
  return (
    <div
      className="px-4 pt-3 pb-8 sm:pb-12 bg-stone-200"
    >
      {/* Text Content */}
      <div className="text-xl sm:text-2xl md:text-3xl dancing-script-regular flex flex-wrap mx-auto pb-8 sm:pb-12 mb-3 pt-4 mt-3 text-center justify-center items-center w-full sm:w-3/4">
      Enjoy your doorstep beauty experience, where luxury meets convenience. A perfect space to relax, rejuvenate, and glow—all from the comfort of your home…
      </div>

      {/* Image Grid */}
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center lg:items-start">
        {/* Left Side */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div className="overflow-hidden w-full">
            <img
              src={fr1}
              alt="frame1"
              className="animate-fadeInUp delay-200 transition-transform duration-500 ease-in hover:scale-105 
              h-52 sm:h-72 md:h-96 lg:h-[500px] w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex gap-4 w-full">
            <div className="overflow-hidden w-1/2">
              <img
                src={fr2}
                alt="frame2"
                className="animate-fadeInUp delay-200 transition-transform duration-500 ease-in hover:scale-105 
                w-full h-40 sm:h-52 md:h-64 object-cover rounded-lg"
              />
            </div>
            <div className="overflow-hidden w-1/2">
              <img
                src={fr3}
                alt="frame3"
                className="animate-fadeInUp delay-200 transition-transform duration-500 ease-in hover:scale-105 
                w-full h-40 sm:h-52 md:h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div className="flex gap-4 w-full">
            <div className="overflow-hidden w-1/2">
              <img
                src={fr4}
                alt="frame4"
                className="animate-fadeInUp delay-200 transition-transform duration-500 ease-in hover:scale-105 
                w-full h-40 sm:h-52 md:h-64 object-cover rounded-lg"
              />
            </div>
            <div className="overflow-hidden w-1/2">
              <img
                src={fr5}
                alt="frame5"
                className="animate-fadeInUp delay-200 transition-transform duration-500 ease-in hover:scale-105 
                w-full h-40 sm:h-52 md:h-64 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="overflow-hidden w-full">
            <img
              src={fr6}
              alt="frame6"
              className="animate-fadeInUp delay-200 transition-transform duration-500 ease-in hover:scale-105 
              h-52 sm:h-72 md:h-96 lg:h-[500px] w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
