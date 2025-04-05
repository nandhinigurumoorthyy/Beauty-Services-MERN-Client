import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/signup.jpg";
import "../index.css";

function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/create", {
        username,
        email,
        password,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        navigate("/error", {
          state: {
            message: "Signup failed! Please check your credentials.",
            details: error.message,
          },
        });
      });
  };

  return (
<div className="flex min-h-screen  overflow-y-auto">
  {/* Main content */}
  <div className="relative w-full flex items-center justify-center">
    {/* Background Image */}
    <img
      src={img}
      alt="Signup Background"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-3 sm:px-3 py-0">
      {/* Form Section */}
      <form
        className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white bg-opacity-45 backdrop-blur-md rounded-lg shadow-xl p-3 lg:py-3 py-0 sm:px-3 sm:py-0 md:p-3"
        onSubmit={handleSubmit}
      >
        {/* Logo */}
        <div className="winky-sans-regular mb-4 flex gap-2 text-3xl sm:text-4xl md:text-5xl items-center justify-center animate-fadeInUp">
          <span className="text-red-950">GLAM</span>
          <span className="text-gray-600">ON</span>
          <span className="text-red-950">GO</span>
        </div>

        <h3 className="text-lg sm:text-xl text-center font-semibold mb-2 text-red-950">
          Sign up now — Beauty at Your Doorstep! ✨
        </h3>
        <h6 className="mb-3 text-sm sm:text-base text-gray-600 font-semibold text-center">
          Create your account
        </h6>

        {/* Input Fields */}
        {[
          {
            label: "User Name",
            value: username,
            setter: setUserName,
            type: "text",
            placeholder: "user name",
            id: "username",
          },
          {
            label: "Password",
            value: password,
            setter: setPassword,
            type: "password",
            placeholder: "********",
            id: "password",
          },
          {
            label: "Email address",
            value: email,
            setter: setEmail,
            type: "email",
            placeholder: "name@example.com",
            id: "email",
          },
        ].map(({ label, value, setter, type, placeholder, id }) => (
          <div className="mb-2" key={id}>
            <label
              htmlFor={id}
              className="block text-sm font-medium text-gray-800"
            >
              {label}
            </label>
            <input
              name={id}
              type={type}
              value={value}
              onChange={(e) => setter(e.target.value)}
              className="mt-1 p-2 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-950"
              placeholder={placeholder}
              required
            />
          </div>
        ))}

        {/* Submit Button */}
        <div className="flex mt-3 justify-center">
          <button
            type="submit"
            className="px-5 py-2 border-2 border-red-950 hover:rounded-xl flex gap-2 items-center justify-center hover:text-white hover:bg-red-950 rounded-lg transition-all duration-300 text-sm sm:text-base"
          >
            Sign Up
          </button>
        </div>

        {/* Login Link */}
        <div className="flex justify-center items-center gap-2 mt-3  text-sm sm:text-base">
          <p className="text-gray-600 font-semibold">Already have an account?</p>
          <Link
            to="/login"
            className="border-2 border-red-950 hover:rounded-xl flex gap-2 items-center no-underline justify-center hover:bg-red-950 py-1 px-3 rounded-lg hover:text-white transition-all duration-300"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  </div>
</div>

  );
}

export default Signup;
