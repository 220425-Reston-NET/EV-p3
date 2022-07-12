import React from "react";
import { Link } from "react-router-dom";

function Eucalyptus() {
  return (
    <div className="benefit-div">
      <div className="lavender">
        <h1 className="h1-header">Eucalyptu benefits</h1>
        <p>
          Eucalyptus is used as a medicine to treat a variety of common diseases
          and conditions including nasal congestion, asthma, and as a tick
          repellant. Diluted eucalyptus oil may also be applied to the skin as a
          remedy for health problems such as arthritis and skin ulcers.
        </p>

        <h1 className="h1-header">Side effects</h1>
        <p>
          When applied to the skin: It's possibly unsafe to use pure eucalyptus
          oil.
        </p>
        <h1 className="h1-header">Special precautions </h1>
        <p>
          Inhaling eucalyptol, a chemical found in eucalyptus oil, might reduce
          the levels of amphetamines in the blood. In theory, the effectiveness
          of amphetamines may be reduced in people who inhale eucalyptol.
          topically, inhalation, or diffusing
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

export default Eucalyptus;
