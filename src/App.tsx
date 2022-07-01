import React from "react";
import logo from "./logo.svg";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";
import Nav from "./pages/nav/Nav";
import SignUpPage from "./pages/signup/SignUpPage";
import StorePage from "./pages/storepage/StorePage";
import ContactusPage from "./pages/contactus/ContactusPage";
import AboutUs from "./pages/aboutus/AboutUs";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/contact" element={<ContactusPage />} />
        <Route path="/about" element={<AboutUs />} />

      </Routes>
    </>
  );
}

export default App;
