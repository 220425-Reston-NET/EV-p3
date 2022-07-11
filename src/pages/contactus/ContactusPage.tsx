import React from "react";
import "./Contact.css";

function ContactusPage() {
  return (
    <div className="contact-div">
      <h2 className="h2-header"> Contact us for more information</h2>

      <p className="help-para">
        For the fastest service, please call the appropriate phone number listed
        below.
      </p>
      <br />
      <div className="b3">
        <h2 className="h2-header">Luscious Blends Members</h2>
        <p>
          Call for Luscious Blendsk Beneficiary Customer Service or Technical Support for
          the MedTrak Beneficiary Program. (887) 363-1303 TTY users call: (897)
          540-6261 24 hours a day, 7 days a week.
        </p>
      </div>
      <div className="bs3">
        <h2 className="h2-header">Non-Luscious Blends Members</h2>
        <p>
          Call for non-members Beneficiary Customer Service or Technical Support
          for the MedTrak Beneficiary Program. (887) 363-1303 TTY users call:
          (897) 540-6261 , 5 days a week.
        </p>
      </div>
      <div className="bs3">
        <p>
          Si tiene alguna pregunta, llame a nuestro Centro de servicio al
          cliente al 1-800-200-4622.{" "}
        </p>
      </div>
    </div>
  );
}

export default ContactusPage;
