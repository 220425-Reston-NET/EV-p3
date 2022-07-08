import React from "react";
import { Link } from "react-router-dom";
import "./LavenderBen.css";

function LavenderBen() {
  return (
    <div className="benefit-div">
      <div className="lavender">
        <h1 className="h1-header">Levender benefits</h1>
        <p>
          Lavender essential oil is one of the most popular and versatile
          essential oils used in aromatherapy. Distilled from the plant
          Lavandula angustifolia, the oil promotes relaxation and is believed to
          treat anxiety, fungal infections, allergies, depression, insomnia,
          eczema, nausea, and menstrual cramps
        </p>

        <h1 className="h1-header">Side effects</h1>
        <p>
          Lavender essential oil may cause skin irritation or an allergic
          reaction in some individuals. If you experience nausea, vomiting, or a
          headache after using lavender, discontinue use immediately. Topical
          use: diffuser or humidifier
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

export default LavenderBen;
