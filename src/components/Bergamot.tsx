import React from "react";
import { Link } from "react-router-dom";

function Bergamot() {
  return (
    <div className="benefit-div">
      <div className="lavender">
        <h1 className="h1-header">Bergamot benefits</h1>
        <p>
          Thanks to its antibacterial and antibiotic properties, Bergamot
          Essential Oil can inhibit the growth of bacteria and prevent future
          infection. alleviate pain , relieve stress, aid digestion, and lower
          blood pressure.
        </p>

        <h1 className="h1-header">Side effects</h1>
        <p>
          bargamot can be damaging for the skin if applied topically whilst skin
          is exposed to direct sunlight, warm climates or UV rays.
        </p>
        <h1 className="h1-header">Special precautions </h1>
        <p>
          Bergamot might also make the skin more sensitive to sunlight. Be sure
          to wear sunblock and protective clothing when spending time in the
          sun. Topical use: aromatically, topically, and internally
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

export default Bergamot;
