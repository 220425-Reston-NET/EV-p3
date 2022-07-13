import React from "react";
import { Link } from "react-router-dom";

function Chamomile() {
  return (
    <div className="fade">
      <div className="lavender">
        <h1 className="h1-header">Chamomile benefits</h1>
        <p>
          Chamomile oil is an essential oil that's been used for a variety of
          conditions, from digestive issues to wound healing, to help with
          depression, anxiety, and sleep. digestive upset, such as indigestion,
          nausea, or gas. wound healing, including ulcers and sores, anxiety
          relief, easing skin conditions like eczema or rashes,
          anti-inflammation and pain relief for conditions like, back pain,
          neuralgia, or arthritis, promoting sleep.
        </p>

        <h1 className="h1-header">Side effects</h1>
        <p>
          Like most of our essential oils, it may interact with prescription
          drugs. Essential oils may cause skin irritation in some people.
        </p>
        <h1 className="h1-header">Special precautions </h1>
        <p>
          Chamomile oils are very concentrated and shouldn’t be swallowed unless
          you’re under the supervision of a qualified professional. Diffusion,
          Spray and Topical
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

export default Chamomile;
