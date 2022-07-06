import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Button, Container } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShopingCartContext";
import './Nav.css'

function Nav() {
  const { openCart, cartQuantity} = useShoppingCart()

  return (
    // <head>
    <>
        <div  className="nav-image"></div>

    <nav className="navbar  navbar-custom navbar-expand-lg navbar-dark " >

      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li>
              <Link to="contact" className="nav-link">
              {/* <div  className="nav-image"></div> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <big>Home</big>
              </Link>
            </li>
            <li>
              <Link to="shop" className="nav-link">
                <big>Sign in</big>
              </Link>
            </li>
            <li>
              <Link to="signup" className="nav-link">
                {/* <big>Sign up</big> */}
              </Link>
            </li>
            <br />
           
            <br />
            <br />
            <li>
              <Link to="contact" className="nav-link">
                <big>Contact Us</big>
              </Link>
            </li>
            <br />
            <li>
              <Link to="signup" className="nav-link">
                {/* <big>Sign up</big> */}
              </Link>
            </li>
            <br />
            <li>
              <Link to="about" className="nav-link">
                <big>About Us</big>
              </Link>
            </li>
            <br />
            <li>
              <Link to="signup" className="nav-link">
                {/* <big>Sign up</big> */}
              </Link>
            </li>
            <br />
            <br /> 
            <li>
              <Link to="store" className="nav-link">
                <big>Store</big>
              </Link>
            </li>
           
          </ul>
          
          {/* <div className="socialmedia-div">
            <a
              href="https://www.instagram.com/essentialvibes1/"
              className="ig-a"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div> */}
        </div>
      </div>
      
    </nav>
    
    </>
    // </head>
  );
}

export default Nav;
