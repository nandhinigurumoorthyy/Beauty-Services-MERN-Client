import { HashLink as Link } from "react-router-hash-link";
import { MdAccountCircle } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";

export const LINKS = [
    { href: "/home#about", label: "About" },
    { href: "/home#services", label: "Services" },
    { href: "/home#milestones", label: "Milestones" },
    { href: "/home/cart", label: <span className="text-3xl text-red-900"><HiShoppingCart /></span> },
    { href: "/home/profile", label: <span className="text-3xl text-red-900"><MdAccountCircle/></span> },
];


  export const HOME_CONTENT = {
    description:"Bringing Salon Expertise to Your Doorstep While Changing the Lives of Service Professionals🚪"
  };

  export const ABOUT_CONTENT = {
    paragraphs: [
     "At GlamOnGo, we bring professional beauty services to your doorstep, ensuring a flawless and convenient experience.",
"From skincare to styling, our experts deliver top-notch services, making beauty effortless and accessible anytime, anywhere."]
  };