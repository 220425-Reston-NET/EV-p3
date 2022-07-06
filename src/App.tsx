import React from "react";
import logo from "./logo.svg";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";
import Nav from "./pages/nav/Nav";
import SignUpPage from "./pages/signup/SignUpPage";
import ContactusPage from "./pages/contactus/ContactusPage";
import AboutUs from "./pages/aboutus/AboutUs";
import { ShoppingCartProvider } from "./context/ShopingCartContext";
import { Store } from "./pages/storepage/Store";
import { Container } from "react-bootstrap";


function App() {
  return (
    <>
    <ShoppingCartProvider>
      <Nav />
      <Container className="mb-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<ContactusPage />} />
        <Route path="/about" element={<AboutUs />} />

      </Routes>
      </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
