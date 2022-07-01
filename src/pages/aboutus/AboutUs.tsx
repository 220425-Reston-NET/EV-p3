import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <div className="about-us-div">
        <h1>About Luscious Blends</h1>
        <p>
          Luscious Blends will focus its business strategy specifically on
          bridging the knowledge gap about the uses and benefits of essential
          oils. We will differentiate ourselves from competitors by specializing
          in converting research into common language that can be consumed by
          anyone, anywhere. We believe this will not only aid the essential oil
          but provide users with the tools they need to better their well-being.
        </p>
        <p>
          <h2>Vision</h2>To promote health and a greater overall well-being for
          every person we touch.
        </p>
        <p>
          <h3>Mission</h3>To provide an enriched array of essential oil products
          and information to people of all backgrounds and lifestyles.
        </p>
      </div>
      <div className="info-div">
        <p> <h2> Visit us:</h2>  1234 Revature Lane. #1000, New York, NY 94220</p>
        <p>
          {" "}
          <h2>Email</h2> Lusciousblends@ev.com{" "}
        </p>
        <p>
          <h2>Call</h2> (255) 352-6258
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
