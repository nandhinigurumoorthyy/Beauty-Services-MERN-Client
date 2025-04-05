import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/profile/cont1.jpg";
import img2 from "../assets/profile/cont2.PNG";
import img3 from "../assets/profile/cont3.jpg";
import img4 from "../assets/profile/cont4.jpg";
import img5 from "../assets/profile/cont5.PNG";

const Profile = () => {
    const [loading, setLoading] = useState(true);
    const email = localStorage.getItem("email");
    const username = localStorage.getItem("username");
    const userid = localStorage.getItem("userid");
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("userid");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("cart"); // ✅ Clear cart
        setCart([]); // Reset cart state
        navigate("/"); // Redirect to login page

    };

    //cancel booking
    const handleDeleteBooking = async (bookingId) => {
        try {
            await axios.delete(`http://localhost:3000/api/cancelbookings/${bookingId}`);
            setBookings((prev) => prev.filter((b) => b._id !== bookingId));
            alert("Your booking has been cancelled. We’re here when you’re ready to pamper yourself again!!❤️");
        } catch (error) {
            console.error("Cancel error:", error);
            alert("Failed to cancel booking.");
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const bookingsResponse = await axios.get(
                    `http://localhost:3000/api/bookings/${userid}`
                );
                setBookings(bookingsResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (userid) {
            fetchData();
        }
    }, [userid]);

    return (
        <>
            <NavBar />
            <div className=" min-h-screen bg-stone-200 pt-10" >

                <div className="pb-10 ">
                    <div className="overflow-hidden w-full" >

                        {/* Image-content */}
                        <div className="relative w-full overflow-hidden pb-10 pt-12 mt-12">
                            <div className="flex gap-4 marquee">
                                {/* Duplicating images for a seamless loop */}
                                {[img1, img2, img3, img4, img5, img1, img2, img3, img4, img5].map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Image ${index + 1}`}
                                        className="w-40 h-32 sm:w-52 sm:h-40 md:w-64 md:h-44 lg:w-80 lg:h-72 object-cover rounded-lg shadow-md"
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className="pl-4 pr-4 sm:pl-6 sm:pr-4 md:pl-14 md:pr-14 lg:pl-14 lg:pr-14">

                        {/* User Info */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">

                            <p className="text-lg">Welcome back, <span className="font-bold text-red-950 uppercase">{username}</span>. Your services await!</p>

                            {/* Logout Section */}
                            <div>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-950 hover:scale-105 text-white hover:text-red-950 px-6 py-2 rounded-xl hover:bg-red-300 transition-all duration-300 w-full sm:w-auto"
                                >
                                    LogOut
                                </button>
                            </div>
                        </div>

                        {/* Bookings Section */}
                        <div className="mt-10">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-7">Booking Summary</h2>
                            {loading ? (
                                <p className="text-gray-800">Loading bookings...</p>
                            ) : bookings.length > 0 ? (
                                <ul className="space-y-10">
                                    {bookings.map((booking) => {
                                        const bookingDateTime = new Date(booking.dateTime);
                                        const now = new Date();
                                        const isPast = bookingDateTime < now;

                                        return (
                                            <li key={booking._id} className="p-5 rounded-lg shadow-md">
                                                <p className="font-semibold text-lg sm:text-xl">Services - <span className="font-normal">{booking.serviceName}</span></p>
                                                <p className=" mt-1">
                                                <span className="font-semibold">Date & Time: </span>{" "}
                                                    {bookingDateTime.toLocaleDateString()}{" "}
                                                    <span className="text-gray-500"> | </span>
                                                    {bookingDateTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}{" "}

                                                </p>
                                                <p><span className="font-semibold">Address: </span> {booking.address}</p>
                                                <p><span className="font-semibold">Age: </span> {booking.contact}</p>
                                                <p><span className="font-semibold">Age: </span> {booking.age}</p>
                                                <p><span className="font-semibold">Price: </span> ₹{booking.price}</p>
                                                <p><span className="font-semibold">Gender: </span> {booking.gender}</p>

                                                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                                    {!isPast ? (
                                                        <button
                                                            type="button"
                                                            onClick={() => handleDeleteBooking(booking._id)}
                                                            className="bg-red-950 text-white px-5 py-2 hover:text-red-950 hover:rounded-2xl rounded-xl hover:bg-red-300 transition-all duration-300 w-full sm:w-auto"
                                                        >
                                                            Cancel Booking
                                                        </button>
                                                    ) : (
                                                        <span className="italic text-gray-500">Completed</span>
                                                    )}
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>

                            ) : (
                                <p>No parlour bookings found.</p>
                            )}
                        </div>
                    </div>

                </div></div>
            <Footer />
        </>
    );
};

export default Profile;
