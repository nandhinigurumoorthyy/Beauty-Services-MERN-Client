import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import serviceData from "./Services.json";
import NavBar from "./NavBar";
import Footer from "./Footer";
import error from "../assets/error.gif";
import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";

const ServiceItem = ({ cart, handleAddClick, handleRemoveClick }) => {
    const [services, setServices] = useState();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const service = serviceData.find((s) => s.id === parseInt(serviceId));

    useEffect(() => {
        const fetchServiceData = () => {
            try {
                const foundService = serviceData.find(
                    (ser) => ser.id === parseInt(serviceId, 10)
                );
                setServices(foundService || null);
            } catch (err) {
                console.error("Error fetching service ", err);
            }
        };

        const fetchReviews = async () => {
            try {
                const response = await fetch(
                    `/apiservice/reviews/${encodeURIComponent(
                        services?.name
                    )}`
                );
                const data = await response.json();
                setReviews(data);
            } catch (err) {
                console.error("Error fetching reviews ", err);
            }
        };

        if (services) fetchReviews();
        else fetchServiceData();

        setLoading(false);
    }, [serviceId, services?.name]);

    const handleServiceClick = () => navigate(`/home/services/${serviceId}`);

    // Check if the service is in the cart
    const isInCart = cart.some((cartItem) => cartItem.id === service.id);

    if (loading) {
        return (
            <div className="flex flex-col h-screen items-center justify-center text-4xl font-semibold">
                <img src={error} alt="Loading" />
                <div>Loading...</div>
            </div>
        );
    }

    if (!services) {
        return <div className="flex h-screen items-center justify-center text-4xl font-semibold">Service not found!</div>;
    }

    return (
         <div className="min-h-screen bg-stone-200">
        <NavBar />
        <div className="pt-28 px-4 md:px-24">
          <div className="flex flex-col  lg:flex-row gap-8 justify-between pb-10 mb-4">
            {/* Gallery */}
            <div className="lg:w-1/4">
              <div className="flex lg:h-96 h-40 overflow-y-auto flex-row lg:flex-col gap-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                {services.photos?.map((image, index) => (
                  <div key={index} className="flex lg:h-full h-40 w-full rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Gallery ${index}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
      
            {/* Title Image */}
            <div className="w-full lg:w-1/3 h-72 md:h-96 overflow-hidden rounded-2xl">
              <img
                src={services.title_card_img}
                alt={services.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
              />
            </div>
      
            {/* Details */}
            <div className="flex-1 flex flex-col gap-4">
              <h4 className="text-2xl md:text-4xl font-semibold text-gray-700">{services.name}</h4>
              <p className="italic text-base md:text-lg">{services.description}</p>
              <p className="text-gray-600 text-xl md:text-2xl">₹ {services.priceRange}</p>
              <p className="flex gap-2 items-center text-lg"><span className="text-red-900 text-2xl"><CiStar /></span> <span>{services.rating}</span></p>
      
              {/* Overview */}
              <div className="flex flex-wrap gap-6 justify-between">
                {["overview"].map((key) => (
                  <div key={key} className="flex-1 min-w-[250px]">
                    <div className="grid grid-cols-3 gap-4">
                      {services[key]?.map((item, index) => (
                        <img
                          key={index}
                          src={item.img}
                          alt={`Overview ${index + 1}`}
                          className="w-20 md:w-24 h-20 md:h-24 rounded-lg shadow-md"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
      
              {/* Brands */}
              <h4 className="font-semibold text-lg md:text-xl text-red-900">Brands</h4>
              <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                {services.brand?.map((brand, index) => (
                  <span key={index} className="text-sm relative after:content-['|'] after:mx-2 last:after:content-['']">
                    {brand}
                  </span>
                ))}
              </div>
      
              {/* Cart Button */}
              <div className="pt-2 w-full">
                <button
                  onClick={() => (isInCart ? handleRemoveClick(service) : handleAddClick(service))}
                  className={`w-full py-2 px-5 font-medium rounded-2xl ${isInCart ? "bg-red-950 text-white" : "hover:bg-red-950 hover:text-white"} border-2 border-red-950`}
                >
                  {isInCart ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
      
          {/* Services Included & Things to Know */}
          <div className="flex flex-col lg:flex-row justify-between mb-8 gap-8">
            <div className="w-full lg:w-1/2">
              <h4 className="font-semibold text-xl text-red-900 mb-3">Services Included</h4>
              <div className="space-y-4">
                {Object.entries(services.services_included || {}).map(([category, items], index) => (
                  <div key={index}>
                    <h5 className="text-lg font-semibold text-gray-700">{category}</h5>
                    <ul className="list-disc pl-5 text-base">
                      {items.map((service, i) => (
                        <li key={i}>{service}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
      
            <div className="w-full lg:w-1/2">
              <h4 className="font-semibold text-xl text-red-900 mb-3">Things to Know</h4>
              <ul className="list-disc pl-5 space-y-1 text-base">
                {services.things_to_know?.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
      
          {/* Hours of Operation & Time */}
          <div className="flex flex-col md:flex-row justify-between gap-6 pb-10">
            <div className="text-sm text-gray-700 font-medium">
              <h5 className="font-semibold text-xl mb-2 text-red-900">Hours of Operation</h5>
              {Object.entries(services.hoursOfOperation).map(([days, hours], index) => (
                <p key={index} className="flex items-center gap-3">
                  <span className="font-semibold text-base text-gray-700">{days}</span>
                  <span>{hours}</span>
                </p>
              ))}
            </div>
      
            <div>
              <h5 className="font-semibold text-xl mb-2 text-red-900">Duration</h5>
              <p className="text-base text-gray-800">{services.time}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    );
};

// Prop Validation
ServiceItem.propTypes = {
    cart: PropTypes.array.isRequired,
    handleAddClick: PropTypes.func.isRequired,
    handleRemoveClick: PropTypes.func.isRequired,
  };

export default ServiceItem;
