import React from "react";
import { Link } from "react-router-dom";

function LemonGrass() {
  return (
    <div className="fade">
      <div className="lavender">
        <h1 className="h1-header">Lemongrass benefits</h1>
        <p>
          Lemongrass, also known as Cymbopogon, might help prevent the growth of
          some bacteria and yeast. Lemongrass also contains substances that are
          thought to relieve pain and swelling, reduce fever, improve levels of
          sugar and cholesterol in the blood, stimulate the uterus and menstrual
          flow, and have antioxidant properties.
        </p>

        <h1 className="h1-header">Side effects</h1>
        <p>
          Lemongrass oil might cause a rash of skin irritation when applied to
          the skin
        </p>
        <h1 className="h1-header">Special precautions </h1>
        <p>
          Pregnancy and breast-feeding: It is LIKELY UNSAFE to take lemongrass
          by mouth during pregnancy. Lemongrass seems to be able to start
          menstrual flow, so there is a concern that it might cause a
          miscarriage. Topical use: inhalation, diffuser or humidifier
        </p>
      </div>
      <Link className="signup-signin" to={`/store`}>
        {/* <button>{userEmail}</button> */}
        <input
          type={"submit"}
          value={" back to shopping"}
          className="signup-link"
        />
      </Link>
    </div>
  );
}

export default LemonGrass;
