import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import servicesData from "./Services.json"; // Import JSON data

const ServiceContent = ({ cart, handleAddClick, handleRemoveClick }) => {
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const navigate = useNavigate();
  const { serviceId } = useParams();

  // Handle Search
  const handleSearch = (searchQuery) => {
    const trimmedQuery = searchQuery.trim().toLowerCase();
    setFilteredServices(
      trimmedQuery
        ? servicesData.filter((service) =>
          service.name.toLowerCase().includes(trimmedQuery)
        )
        : servicesData
    );
  };

  // Check if Service is in Cart
  const isInCart = (service) => cart.some((cartItem) => cartItem.id === service.id);

  return (
<div className="h-full container mx-auto px-1 sm:px-6 lg:px-8 overflow-auto">
  {/* SearchBar Component */}
  <SearchBar onSearch={handleSearch} />

  <div className="flex flex-wrap justify-center sm:justify-start md:justify-around pt-5 gap-5">
    {/* Show "No services found!" if search result is empty */}
    {filteredServices.length === 0 ? (
      <div className="text-center text-red-900 text-lg sm:text-xl md:text-2xl pt-5">
        No services found!
      </div>
    ) : (
      filteredServices.map((service) => (
        <div
          key={service.id}
          className="w-full sm:w-full md:w-3/5 lg:w-2/5 pb-5 pt-8 flex flex-col h-auto hover:bg-zinc-200 px-4 rounded-xl relative transition-all duration-300"
        >
          {/* Image Container */}
          <figure className="relative">
            <img
              src={service.title_card_img}
              alt={service.name || "Service Image"}
              className=" w-full h-80 sm:h-80 md:h-60 object-cover rounded-lg"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg">
              <h1 className="text-lg text-white font-semibold">{service.name}</h1>
              <p className="text-gray-200 text-sm">{service.description}</p>

              {/* Buttons */}
              <div className="items-center justify-center flex flex-wrap gap-3 pt-4">
                <button
                  onClick={() => navigate(`/home/services/${service.id}`)}
                  className="cursor-pointer py-2 px-4 font-medium rounded-lg bg-white text-red-950 hover:bg-red-950 hover:text-white border-2 border-red-950 transition"
                >
                  View More
                </button>

                <button
                  onClick={() =>
                    isInCart(service) ? handleRemoveClick(service) : handleAddClick(service)
                  }
                  className={`cursor-pointer py-2 px-4 font-medium rounded-lg border-2 border-red-950 transition ${
                    isInCart(service)
                      ? "bg-red-950 text-white"
                      : "bg-white text-red-950 hover:bg-red-950 hover:text-white"
                  }`}
                >
                  {isInCart(service) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </figure>
        </div>
      ))
    )}
  </div>
</div>

  );
};

// Prop Validation
ServiceContent.propTypes = {
  cart: PropTypes.array,
  handleAddClick: PropTypes.func.isRequired,
  handleRemoveClick: PropTypes.func.isRequired,
};

export default ServiceContent;
