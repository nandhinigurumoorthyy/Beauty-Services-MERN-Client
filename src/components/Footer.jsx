import React from "react";
import { PiWhatsappLogo, PiMetaLogo, PiYoutubeLogo, PiInstagramLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <div
      className="text-white px-10 py-10 bg-red-950"
    >
      {/* Wrapper - Split layout for md & lg */}
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Left Side - Logo and Welcome Text */}
        <div className="flex flex-col gap-4 md:w-1/3 lg:w-1/4 items-center md:items-start text-center md:text-left">
          {/* Logo */}
          <div className="h-20 w-[230px]">
            <div className="winky-sans-regular flex gap-2 text-4xl md:text-5xl items-center justify-center animate-fadeInUp">
              <span className="text-white ">
                GLAM</span>
              <span className="text-gray-500">ON</span>
              <span className="text-white ">GO</span>
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
          <div className="text-sm leading-6 pt-2">
            Glow, relax, and rejuvenate, because beauty is more than just a service.
            It's about self-care, confidence, and feeling your best.
          </div>
           {/* Contact */}
           <div className="md:mt-10 mt-6 bg-slate-300/25 text-white rounded-2xl px-6 py-3 flex flex-col justify-center">
            <p className="text-sm">Facing issues? Reach us out at:</p>
            <h4 className="font-semibold">Contact Us</h4>
            <p className="text-sm">support@glamongo.com</p>
          </div>
        </div>

         
        {/* Right Side - All Links */}
        <div className="grid grid-cols-2 justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-4 w-full px-4 ">

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="leading-6 text-sm pl-0">
              <li>About Us</li>
              <li>Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Door Step</li>
              <li>Blog</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* Contact */}
          <div > {/* Add left padding to entire block */}
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="leading-6 text-sm pl-0 ">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>



          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="leading-6 text-sm pl-0">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Report Abuse</li>
              <li>BIS Standard</li>
              <li>BIS Products</li>
              <li>Certification</li>
            </ul>
          </div>

          {/* Available in */}
          <div>
            <h4 className="font-semibold mb-2">Available in</h4>
            <ul className="leading-6 text-sm pl-0">
              <li>Chennai</li>
              <li>Mumbai</li>
              <li>Kolkata</li>
              <li>Hyderabad</li>
              <li>Bangalore</li>
              <li>1000+</li>
            </ul>
          </div>

          {/* Life at */}
          <div>
            <h4 className="font-semibold mb-2">Life at Glam On Go</h4>
            <ul className="leading-6 text-sm pl-0">
              <li>Explore</li>
              <li>News</li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="font-semibold mb-2">Business</h4>
            <ul className="leading-6 text-sm pl-0">
              <li>App</li>
              <li>Media</li>
            </ul>
          </div>


          {/* Social Links */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-2">Social Links</h4>
            <div className="flex gap-4 text-2xl">
              <PiWhatsappLogo />
              <PiMetaLogo />
              <PiYoutubeLogo />
              <PiInstagramLogo />
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Footer;
