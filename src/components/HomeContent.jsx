import { motion } from "framer-motion";
import { clipPath } from "framer-motion/client";
import { HOME_CONTENT } from "../constants";
import bg from "../assets/bg3.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const HomeContent = () => {
  return (
    <>
   <section className="w-full pt-10 px-8 md:px-12 lg:px-16 ">
  <div className="relative z-10 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center">
    
    {/* 🔹 Text Content */}
    <motion.div
      className="w-full md:w-2/5 px-6 text-center md:text-left"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-lg sm:text-xl md:text-3xl lg:text-4xl mt-10 md:mt-14 dancing-script-regular leading-snug"
        variants={textVariants}
      >
        {HOME_CONTENT.description}
      </motion.h1>
    </motion.div>

    {/* 🔹 Image Section */}
    <motion.div
      className="w-full md:w-2/5 px-6 flex justify-center items-center pt-14"
      initial="hidden"
      animate="visible"
      variants={imageVariants}
    >
      <img
        src={bg}
        alt="Profile"
        className="rounded-3xl w-4/5 sm:w-3/5 md:w-[400px] lg:w-[500px] h-auto max-h-[400px] object-cover"
      />
    </motion.div>
    
  </div>
</section>

    </>
  );
};

export default HomeContent;
