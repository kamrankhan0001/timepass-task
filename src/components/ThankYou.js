import React from "react";
import "./ThankYou.css";
import checkIcon from "../assets/icon-thank-you.svg"; 

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="icon-container">
        <img src={checkIcon} alt="Success" className="check-icon" />
      </div>
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at
        <strong> support@kamranbgp.com</strong>.
      </p>
    </div>
  );
};

export default ThankYou;
