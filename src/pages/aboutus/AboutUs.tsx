import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <div className="about-us-div">
        <h1 className="h1-header">About Luscious Blends</h1>
        <p>
          Luscious Blends will focus its business strategy specifically on
          bridging the knowledge gap about the uses and benefits of essential
          oils. We will differentiate ourselves from competitors by specializing
          in converting research into common language that can be consumed by
          anyone, anywhere. We believe this will not only aid the essential oil
          but provide users with the tools they need to better their well-being.
        </p>
        <div className="essential-needs-intro">
          <h1 className="h1-header">What is Aromatherapy?</h1>
          <p>
            Aromatherapy is a holistic healing treatment that uses natural plant
            extracts to promote health and well-being. Sometimes it’s called
            essential oil therapy. Aromatherapy uses aromatic essential oils
            medicinally to improve the health of the body, mind, and spirit. It
            enhances both physical and emotional health. Healthline
          </p>
          <h1 className="h1-header">About Essential Oils</h1>
          <p className="about-paragraph">
            What are essential oils? Essential oils are a form of alternative
            medicine that employs concentrated plants extracts to support health
            and well-being. Often used in aromatherapy, the oils capture the
            plant’s scent and flavor, or “essence”. The oils are typically
            obtained through distillation (using steam or water) or mechanical
            methods, such as cold pressing. For healing purposes, the oils can
            be inhaled or diluted and applied to the skin.
          </p>
          <p>
            There are more than 90 types of essential oils, each with its own
            unique smell and potential health benefits. Some of the popular oils
            and benefits are
          </p>
          <ul>
            <li> Peppermint: boost energy and aid in digestion</li>
            <li>Lavender: relieves stress</li>
            <li>Sandalwood: calms nerve and helps to focus </li>
            <li>Chamomile: improves mood and relaxation</li>
            <li>Tea Tree: fights infections and boosts immunity</li>
          </ul>
        </div>
        <p>
          <h2>Our Vision</h2>To promote health and a greater overall well-being for
          every person we touch.
        </p>
        <p>
          <h3>Our Mission</h3>To provide an enriched array of essential oil products
          and information to people of all backgrounds and lifestyles.
        </p>
      </div>
      <div className="info-div">
        <p> <h2> Visit Us:</h2>  1234 Revature Lane. #1000, New York, NY 94220</p>
        <p>
          {" "}
          <h2>Email:</h2> Lusciousblends@ev.com{" "}
        </p>
        <p>
          <h2>Call:</h2> (255) 352-6258
        </p>
      </div>
      {/* our instagram logo */}
      {/* <div className="info-div-ig">
        <h5>Check out our instagram</h5>
            <a
              href="https://www.instagram.com/essentialvibes1/"
              className="ig-a"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>  */}
    </div>
  );
}

export default AboutUs;
