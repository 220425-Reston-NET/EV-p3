import React from "react";
import { Link } from "react-router-dom";
import "./ThankYou.css";

function ThankYou() {
  return (
    <>
    <div>
    <div>
      <h2 className="h1-style">Thank you for being our valued customer.</h2>
        <Link to="/" className="nav-link">
          <big style={{ color: "m green " }}>Back to Luscious Blends</big>
        </Link>
      </div>
     

      {/* <img
        className="nav-image"
        src="https://media.discordapp.net/attachments/991356486393528363/994277618260136077/essential_vibes_7.png"
        alt=""
      /> */}
      <div id="thankyou-image" className="thankyou-image"></div>

      {/* 
      <img
        className="thank-image"
        src="https://i.pinimg.com/564x/e1/21/c2/e121c298246ce6017ea3b477bb8d42e3.jpg"
        alt="order confirmation image"
      /> */}
    </div>
    
    </>
  );
}

export default ThankYou;
