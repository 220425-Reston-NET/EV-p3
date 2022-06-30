import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    // <head>
    <nav  className="navbar  navbar-expand-lg navbar-dark bg-dark">
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
          </ul>
        </div>
      </div>
    </nav>
    // </head>
  );
}

export default Nav;
