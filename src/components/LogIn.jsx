import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../assets/login.jpg";
import "../index.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data being sent:", { email, password });

    axios
    .post("https://beauty-services-mern-server.onrender.com/login", { email, password })
    .then((res) => {
      console.log("Login response:", res);
  
      if (res.data && res.data.user) {
        const user = res.data.user; // ✅ No need to extract from an array
  
        localStorage.setItem("userid", user.userid); // ✅ Store user ID correctly
        localStorage.setItem("userEmail", user.email); // ✅ Store user email
        localStorage.setItem("username", user.username);
  
        console.log("Stored Username:", localStorage.getItem("username")); // Debugging
  
        navigate("/home"); // Redirect to home page
      } else {
        navigate("/error", {
          state: { message: "Unexpected server response. Please try again later." },
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error.message);
      navigate("/error", {
        state: {
          message: "Login failed! Please check your credentials.",
          details: error.response?.data?.message || error.message,
        },
      });
    });
  
  };


  return (
    <div className="flex min-h-screen flex-col items-center justify-center relative  overflow-y-auto">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Beauty Parlour Visual"
          className="w-full h-full object-cover"
        />
        {/* Overlay effect for better readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-md md:max-w-lg bg-white/50 backdrop-blur-md p-6 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="winky-sans-regular mb-3 flex gap-2 text-4xl md:text-5xl items-center justify-center animate-fadeInUp">
          <span className="text-red-950 ">
            GLAM</span>
          <span className="text-gray-600">ON</span>
          <span className="text-red-950 ">GO</span>
        </div>

        {/* Form */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          <h3 className="text-lg text-center font-semibold">
            Welcome Back to Your Beauty Haven! 💖
          </h3>
          <h6 className="text-gray-800 font-semibold text-center">
            Login to book your glow-up session ✨
          </h6>


          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              className="block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-950"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-800">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-950"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="border-2 border-red-950 py-2 px-4 hover:bg-red-950 hover:text-white rounded-lg focus:outline-none hover:rounded-2xl transition-all"
            >
              Log In
            </button>
          </div>

          {/* Signup Link */}
          <div className="flex justify-center items-center gap-2 pt-2">
            <p className="text-gray-800 font-semibold">New to GlamOnGo?</p>
            <Link
              to="/create"
              className="text-gray-800 border-2 border-red-950 py-1 px-3 rounded-lg focus:outline-none hover:rounded-2xl transition-all hover:bg-red-950 hover:text-white"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>


  );
};

export default LogIn;
