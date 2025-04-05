import React from 'react'
import img1 from "../assets/girl.svg";
import img2 from "../assets/website.svg";
import img3 from "../assets/spa-effect.svg";
import img4 from "../assets/map.svg";
import img5 from "../assets/star.svg";
import nan from "../assets/nan.jpg";

const MileStones = () => {
  return (
<div>
  <section className="px-4 sm:px-10 md:px-20 lg:px-28 pt-14 pb-10 bg-stone-200 text-center" id="milestones">
    <div className="relative w-full mb-10">
      {/* Image */}
      <img src={nan} alt="Glam & Go" className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-3xl" />

      {/* Overlay Text */}
      <div className="absolute top-3 sm:top-5 left-3 sm:left-5 p-2 sm:p-4 rounded-lg bg-black/15">
        <p className="text-sm sm:text-base md:text-lg font-medium text-white ">
          At <span className="font-semibold text-red-950 uppercase">Glam </span>
          <span className="font-semibold text-gray-600 uppercase">On </span>
          <span className="font-semibold text-red-950 uppercase">Go</span>, we take pride in revolutionizing beauty services with unparalleled expertise and convenience.
        </p>
      </div>
    </div>

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-7 pb-2">
      Achievements So Far
    </h1>

    {/* Icons & Numbers Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
      {/* Milestone Items */}
      {[ 
        { img: img1, number: "1000+", text: "Professionals" },
        { img: img2, number: "1M+", text: "Happy Users" },
        { img: img3, number: "2M+", text: "Bookings Completed" },
        { img: img4, number: "2000+", text: "Cities in India" },
        { img: img5, number: "4.5+", text: "India’s Top Rated Beauty App" }
      ].map((milestone, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={milestone.img} alt={`milestone-${index}`} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"/>
          <h3 className="text-xl sm:text-2xl font-semibold mt-2">{milestone.number}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{milestone.text}</p>
        </div>
      ))}
    </div>
  </section>
</div>


  )
}

export default MileStones