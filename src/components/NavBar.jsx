import React, { useState } from "react";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { HashLink as Link } from "react-router-hash-link";
import { LINKS } from "../constants"; // Ensure this contains { label: "Home", href: "#home" }

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu on link click (for mobile)
  };

  return (
    <nav className="fixed w-full px-6 sm:px-10 md:px-14 flex justify-between items-center">
    <div className="w-full  rounded-lg bg-white bg-opacity-20 backdrop-blur-lg h-full flex justify-between items-center px-6 sm:px-10 md:px-6 py-3 md:py-4 md:gap-5 gap-3 sm:gap-5">

        {/* 🔹 Logo */}
        <div className="text-lg">
          <Link to="/home#home" smooth>
            <div className="  className=h-16 w-[180px] md:w-[230px]">
              <div className="cursor-pointer winky-sans-regular flex gap-2 text-4xl md:text-5xl items-center justify-center animate-fadeInUp">
                <span className="text-red-950 ">
                  GLAM</span>
                <span className="text-gray-600">ON</span>
                <span className="text-red-950 ">GO</span>
              </div>

              {/* Right-Aligned Welcome Message */}
              <div className="cursor-pointer w-full animate-fadeInUp delay-200 ">
                <h3 className="flex justify-end">
                  <span className="text-xs italic">
                    Beauty at Your Doorstep!! </span><span className="text-xs"> ❤️
                  </span>
                </h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          {LINKS.map((link, index) => (
            <Link to={link.href} key={index} className="hover:text-red-900  transition">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <RiCloseFill className="w-6 h-6" /> : <RiMenu3Fill className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full shadow-md p-4 flex flex-col space-y-4 md:hidden">
            {LINKS.map((link, index) => (
              <Link to={link.href} key={index} className="hover:text-red-900 transition" onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
        </div>
    </nav>
  );
};

export default NavBar;
