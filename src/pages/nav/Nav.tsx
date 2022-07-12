import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Button, Container } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShopingCartContext";
import "./Nav.css";
// import image from '../..medtraklogo/image.png';

function Nav() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    // <head>
    <>
      <nav className="navbar  navbar-custom navbar-expand-lg navbar-dark ">
        {/* <img src={image} height={100} width={100} /> */}
        <div className="container-fluid">
          {/* <div  className="nav-image"></div> */}
          <img
            className="nav-image"
            src="https://media.discordapp.net/attachments/991356486393528363/994277618260136077/essential_vibes_7.png"
            alt=""
          />

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
            <div className="nav-image"></div>

            <ul className="navbar-nav">
              <li>
                <Link to="contact" className="nav-link">
                  {/* <div  className="nav-image"></div> */}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <big style={{ color: "m green " }}>Home</big>
                </Link>
              </li>
              <li>
                <Link to="shop" className="nav-link">
                  <big style={{ color: "m green " }}>Sign in</big>
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
                  <big style={{ color: "m green " }}>Contact Us</big>
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
                  <big style={{ color: " m green " }}>About Us</big>
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
                  <big style={{ color: "m green " }}>Store</big>
                </Link>
              </li>
              <br />
              <li>
                <Link to="lavender" className="nav-link">
                  {/* <big>Lavender</big> */}
                </Link>
              </li>
              <li>
                <Link to="lgrass" className="nav-link">
                  {/* <big>Lemongrass</big> */}
                </Link>
              </li>
              <li>
                <Link to="bergamot" className="nav-link">
                  {/* <big>Bergamot</big> */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="socialmedia-div">
            <a
              href="https://www.instagram.com/lblnds/"
              className="ig-a"
            >
              <FontAwesomeIcon icon={faInstagram} size="5x" />
            </a>
          </div>
      </nav>
    </>
    // </head>
  );
}

export default Nav;
