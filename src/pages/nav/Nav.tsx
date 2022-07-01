import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Nav() {
  return (
    // <head>
    <nav className="navbar  navbar-expand-lg navbar-dark bg-secondary">
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
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <big>Home</big>
              </Link>
            </li>
            <li>
              <Link to="shop" className="nav-link">
                <big>Shop</big>
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
                <big>Contact us</big>
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
                <big>About us</big>
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
                <big>Shop as guest</big>
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
    // </head>
  );
}

export default Nav;
