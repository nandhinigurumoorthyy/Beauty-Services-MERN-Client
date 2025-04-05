import { Link, useLocation } from "react-router-dom";

import img from "../assets/error.gif";

function Error() {
  const location = useLocation();
  const errorMessage =
    location.state?.message || "An unexpected error occurred...";
  const errorDetails = location.state?.details || "";

  return (
    <>
    <div className="bg-stone-200 h-screen flex flex-col gap-5 justify-center items-center min-vh-100 px-3">
  <div className="text-center">
    <img
      src={img}
      alt="error img"
      className="mb-4"
      style={{ maxWidth: "300px", width: "100%" }}
    />
  </div>

  <div className="mb-4 text-center">
    <h3 className="font-semibold">{errorMessage}</h3>
    {errorDetails && <p className="text-gray-800">{errorDetails}</p>}
  </div>

  <div>
  <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
    <Link
      to="/create"
      className="bg-red-800 hover:bg-red-900 text-white  px-6 py-2 hover:rounded-2xl rounded-lg flex items-center gap-2 transition duration-200"
    >
      Sign Up
    </Link>
    <Link
      to="/login"
      className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 hover:rounded-2xl rounded-lg flex items-center gap-2 transition duration-200"
    >
      Log In
    </Link>
  </div>
</div>

</div>

    </>
  );
}

export default Error;
