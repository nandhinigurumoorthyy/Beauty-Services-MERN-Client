import React from "react";
import img1 from "../assets/service1.jpg";
import img2 from "../assets/service2.jpg";
import img3 from "../assets/service3.png";
import ServiceContent from "./ServiceContent";

const Services = ({ handleAddClick, handleRemoveClick, cart }) => {
  return (
    <div className="px-10 md:px-28 bg-stone-200 py-14" id="services">
      {/* Small description */}
      <div className="flex flex-col gap-6 pb-10 mb-5">
        {/* Images Section */}
        <div className="flex flex-col md:flex-row justify-around gap-6 md:gap-10 text-center">
          <div className="flex flex-col items-center">
            <img src={img1} alt="Female Salon at Home" className="w-64 h-64 md:h-[280px] rounded-3xl" />
            <p className="mt-3 font-semibold text-gray-800">Female Salon at Home</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img2} alt="Female Spa at Home" className="w-64 h-64 md:h-[280px] rounded-3xl" />
            <p className="mt-3 font-semibold text-gray-800">Female Spa at Home</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img3} alt="Advanced Facials" className="w-64 md:h-[280px] h-64 rounded-3xl" />
            <p className="mt-3 font-semibold text-gray-800">Advanced Facials</p>
          </div>
        </div>

        {/* Descriptions Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 text-center max-w-5xl mx-auto">
          <p>
            We provide a range of beauty services in the comfort of your home. From waxing, facials, clean-ups, and mani-pedi
            to body polishing and even hair spa—you name it, we have it.
          </p>
          <p>
            Whether you want to de-stress or enjoy a pain-relieving body massage, we’ve got everything for you.
            We also cater to the needs of the elderly, new moms, kids, and period pain relief.
          </p>
          <p>
            As we age, our skin loses collagen and becomes dull and wrinkly. Our Advanced LED Facials at Home nourish
            your skin with LED light, making it look younger, firmer, and hydrated.
          </p>
        </div>
      </div>

      {/* Services List */}
      <ServiceContent handleAddClick={handleAddClick} handleRemoveClick={handleRemoveClick} cart={cart} />
    </div>
  );
};

// Default Props (Ensures safe fallback)
Services.defaultProps = {
  cart: [],
  handleAddClick: () => {},
  handleRemoveClick: () => {},
};

export default Services;
