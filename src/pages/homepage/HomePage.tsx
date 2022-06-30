import React from "react";
import "./HomePage.css";
function HomePage() {
  return (
    <>
      <div className="homepage">
        <span className="about-en">Welcome to Essential Needs</span>
        <div className="essential-needs-intro">
          <h1>About essential oils</h1>
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
          <h3>Vision</h3>
          <p>
            To promote health and a greater overall well-being for every person
            we touch
          </p>
          <h4>Mission</h4>
          <p>
            To provide an enriched array of essential oil products and
            information to people of all backgrounds and lifestyles.
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
