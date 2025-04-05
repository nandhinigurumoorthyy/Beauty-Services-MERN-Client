import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import error from "../assets/error.gif";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";

const Cart = ({ cart, setCart, handleRemoveClick }) => {
    const [price, setPrice] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [bookingData, setBookingData] = useState({
        address: "",
        phone: "",
        age: "",
        gender: "Male",
        dateTime: new Date().toISOString().slice(0, 16), // Default to now
    });
    const navigate = useNavigate()
    const username = localStorage.getItem("username");
    useEffect(() => {
        setLoading(false);
    }, []);

    const handlePrice = () => {
        if (cart.length === 0) {
            setPrice(0);
            return;
        }

        let amt = 0;
        cart.forEach((item) => {
            // ✅ Extract correct numerical value from priceRange (Handles ₹ & commas)
            const numericPrice = parseFloat(
                String(item.priceRange || "").replace(/[^0-9.]/g, "")
            ) || 0;
            amt += numericPrice;
        });

        // ✅ Apply 10% discount
        setPrice((amt * 0.9).toFixed(2));
    };

    useEffect(() => {
        handlePrice();
    }, [cart]);

    // Booking
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData({ ...bookingData, [name]: value });
    };

    const handleBookClick = () => {
        // ✅ Fetch latest user data from localStorage
        const userId = localStorage.getItem("userid");
        const userEmail = localStorage.getItem("userEmail");
        if (!userId || !userEmail) {
            alert("User not logged in! Please login first.");
            return;
        }
        setIsBookingOpen(true);
    };
  

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Fetch latest user data from localStorage
        const userId = localStorage.getItem("userid");
        const userEmail = localStorage.getItem("userEmail");
       
        console.log("User ID before booking:", userId); // Debugging
        console.log("User Email before booking:", userEmail); // Debugging
        console.log("User name before booking:", username); 
        if (!userId || !userEmail) {
            alert("User not logged in! Please login first.");
            return;
        }

        try {
            const bookingDetails = {
                username:username,
                userid: userId,
                userEmail: userEmail,
                address: bookingData.address,
                contact: bookingData.phone,
                age: bookingData.age,
                gender: bookingData.gender,
                dateTime: bookingData.dateTime,
                serviceName: cart.map(item => item.name).join(", "),
                price: price
            };

            const response = await axios.post("https://beauty-services-mern-server.onrender.com/api/bookings", bookingDetails);
            alert("Booking Confirmed!🥰 Sit back and relax — we’ll be at your doorstep soon.❤️");
            console.log("Booking Response:", response.data);
            console.log("Booking Details:", bookingDetails)
            localStorage.removeItem("cart");
            setCart([]); // if you're using useState for cart

            setIsBookingOpen(false);
            navigate("/home/profile");
        } catch (error) {
            console.error("Booking Error:", error);
            alert(`Booking Failed: ${error.response?.data?.message || "Try again later."}`);
        }
    };

    const getMinBookingTime = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() + 60); // Add 1 hour
        now.setSeconds(0);
        now.setMilliseconds(0);

        // Format to local ISO string (YYYY-MM-DDTHH:mm)
        const localISOTime = now.toLocaleString("sv-SE", { timeZone: "Asia/Kolkata" }).replace(" ", "T").slice(0, 16);
        return localISOTime;
    };



    if (loading) {
        return (
            <div className="flex flex-col h-screen items-center justify-center text-4xl font-semibold">
                <img src={error} alt="Loading" />
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <>
            <NavBar />
            <div className="min-h-screen flex flex-col">
                <div className="flex items-center flex-col mb-10 pb-10 md:pt-44 pt-36 lg:pt-36 gap-7 px-6 md:px-16 lg:px-24 flex-grow">
                    {cart.length === 0 ? (
                        <div className="text-center text-2xl font-semibold text-gray-600">
                            Your cart is empty...!!!
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div
                                className="flex flex-col md:flex-row items-center gap-8 border-b border-zinc-400 pb-4"
                                key={item.id}
                            >
                                {/* Image */}
                                <img
                                    src={item.title_card_img}
                                    className="w-36 h-32 rounded-lg object-contain"
                                    alt={item.name}
                                />

                                {/* Title */}
                                <h1 className="text-lg md:text-xl font-medium text-center md:text-left flex-wrap flex max-w-xs">
                                    {item.name}
                                </h1>

                                {/* Price */}
                                <p className="text-2xl font-semibold">₹ {item.priceRange}</p>

                                {/* Remove Button */}
                                <button
                                    className="text-lg md:text-xl py-2 px-4 border-2  hover:bg-red-300 hover:rounded-2xl text-white bg-red-950 hover:text-red-950 rounded-md"
                                    onClick={() => handleRemoveClick(item)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}

                    {/* Total & Discount Section */}
                    {cart.length > 0 && (
                        <div className="flex flex-col gap-3 pt-5 md:pt-9">
                            <div className="flex justify-between text-2xl md:text-3xl font-semibold px-2">
                                <span className="text-gray-700">Total</span>
                                <span>₹ {price}</span>
                            </div>
                            <div className="text-lg md:text-2xl text-gray-700 px-2 pb-10">
                                A 10% discount has been applied to your total bill.
                            </div>

                            {/* Book now */}
                            <div>
                                <button
                                    onClick={handleBookClick}
                                    className="text-lg md:text-xl py-2 px-4 border-2  hover:bg-red-300 hover:rounded-2xl text-white bg-red-950 hover:text-red-950 rounded-md">
                                    Book Now – Your Perfect Service Awaits!
                                </button>
                            </div>
                        </div>
                    )}

                    {isBookingOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                                <h2 className="text-xl font-semibold mb-4">Book Your Appointment</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <h5>Hello {username} 👋, Kindly fill in your details...</h5>
                                    <input type="text" name="address" placeholder="Address" value={bookingData.address} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                                    <input   pattern="[0-9]{10}"
  minLength={10}
  maxLength={10} type="tel" name="phone" placeholder="9123456789" value={bookingData.phone} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                                    <input   min={1}
  max={120} type="number" name="age" placeholder="Age" value={bookingData.age} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                                    <select name="gender" value={bookingData.gender} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <input
                                        type="datetime-local"
                                        name="dateTime"
                                        min={getMinBookingTime()}
                                        value={bookingData.dateTime}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />


                                    <div className="flex justify-between mt-4">
                                        <button type="submit" className="bg-green-800 hover:bg-green-900 text-white py-2 px-4 rounded-md">
                                            Confirm Booking
                                        </button>
                                        <button type="button" onClick={() => setIsBookingOpen(false)} className="bg-red-800 hover:bg-red-900 text-white py-2 px-4 rounded-md">
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>

            </div>
            <Footer />
        </>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired,
    handleRemoveClick: PropTypes.func.isRequired,
};

export default Cart;
