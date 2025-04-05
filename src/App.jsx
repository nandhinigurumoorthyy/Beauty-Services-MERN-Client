import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Error from "./components/Error";
import FirstPage from "./components/FirstPage";
import LogIn from "./components/LogIn";
import Signup from "./components/SignUp";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import FooterContent from "./components/FooterContent";
import ServiceItem from "./components/ServiceItem";
import Services from "./components/Services";
import MileStones from "./components/MileStones";
import Review from "./components/Review";
import Cart from "./components/Cart";
import Profile from "./components/Profile";

function Layout() {
  const location = useLocation();

  // Cart State
  const [cart, setCart] = useState([]);

    const navigate = useNavigate();

    // ✅ Load cart from localStorage on page load
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // ✅ Save cart to localStorage whenever cart state changes
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    // ✅ Handle Add Item
    const handleAddClick = (item) => {
        setCart((prevCart) => {
            const exists = prevCart.find((cartItem) => cartItem.id === item.id);
            if (exists) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem
                );
            }
            return [...prevCart, { ...item, amount: 1 }];
        });
    };

    // ✅ Handle Remove Item
    const handleRemoveClick = (item) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== item.id));
    };

  // Routes where NavBar & Sections should be hidden
  const isServicePage = location.pathname.startsWith("/home/services/");
  const isAuthPage = ["/create", "/login", "/error","/"].includes(location.pathname);
  const isCartPage = location.pathname === "/home/cart";
  const isProfilePage = location.pathname === "/home/profile";

  return (
    <>
      {/* ✅ Show ONLY `ServiceItem`, `Signup`, `Login`, or `Error` when on those pages */}
      {isServicePage ? (
        <Routes>
          <Route path="/home/services/:serviceId" element={<ServiceItem cart={cart}
            handleAddClick={handleAddClick}
            handleRemoveClick={handleRemoveClick} />} />
        </Routes>
      ) : isAuthPage ? (
        <Routes>
          <Route path="/create" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/error" element={<Error />} />
          <Route path="/" element={<FirstPage />} />
        </Routes>
      ) : isCartPage ? (
        <Routes>
          <Route path="/home/cart" element={<Cart cart={cart} setCart={setCart} handleRemoveClick={handleRemoveClick} />} />
        </Routes>
      ) : isProfilePage ? (
        <Routes>
          <Route path="/home/profile" element={<Profile />} />
        </Routes>)
        : (
          <>
            {/* ✅ Show NavBar and other sections for remaining pages */}
            <NavBar />

            <Routes>

              <Route path="/home" element={<Home />} />

            </Routes>

            {/* ✅ Show these sections only on normal pages */}
            <About />
            <Services handleAddClick={handleAddClick} handleRemoveClick={handleRemoveClick} cart={cart} />
            <MileStones />
            <Review />
            <FooterContent />
            <Footer />
          </>
        )}
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
