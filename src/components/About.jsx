import React from "react";
import { ABOUT_CONTENT } from "../constants";
import { motion } from "framer-motion";
import bg from "../assets/bg1.png";
import shock from "../assets/shock.png";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { clipPath: "inset(0 50% 0 50%)" },
    visible: {
      clipPath: "inset(0 0% 0 0%)",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <div className="h-full">
    <section className="px-4 sm:px-8 md:px-28 bg-stone-200 pt-16" id="about">
  <div className="relative  flex flex-col-reverse md:flex-row items-center justify-center">
    
    {/* Image Section */}
    <motion.div
      className="w-full md:w-3/5 px-4 sm:px-8"
      initial="hidden"
      animate="visible"
      variants={imageVariants}
    >
      <img
        src={bg}
        alt="Profile"
        className="rounded-3xl w-full max-w-[400px] mx-auto md:mx-0"
      />
    </motion.div>

    {/* Text Content */}
    <motion.div
      className="w-full md:w-2/5 px-4 sm:px-8 text-center md:text-left"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-2 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariant}
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.div>
  </div>

  {/* Offer Section */}
  <div className="md:pt-16 lg:pt-16 pt-8 flex flex-col-reverse md:flex-row lg:flex-row justify-center items-center gap-6 w-full px-4 ">
    
    {/* Offer Card */}
    <div className="w-full sm:w-4/5 md:w-1/2 flex flex-col gap-6 border-2 rounded-2xl px-6 sm:px-10 py-8 sm:py-10 bg-red-950 shadow-xl text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
        Special Offer
      </h1>
      <div className="w-full bg-white py-2 rounded-md">
        <h1 className="text-3xl sm:text-4xl text-red-900 font-bold">
          MEGA SALE !!!
        </h1>
      </div>
      <p className="text-white text-xl sm:text-2xl">
        <span>Up to </span>
        <span className="text-red-900 text-3xl sm:text-4xl bg-white px-2 font-bold rounded-md">10%</span>
        <span> discount</span>
      </p>
    </div>

    {/* Offer Image */}
    <img 
      src={shock} 
      className="w-full sm:w-4/5 md:w-1/2 h-56 sm:h-72 md:h-80 lg:h-96 object-contain"
      alt="Offer Shock"
    />
  </div>
</section>

    </div>
  );
};

export default About;
