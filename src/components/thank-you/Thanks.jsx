import React from "react";
import "./Thanks.css";
import { ReactComponent as ThankLogo } from "../../assets/icon-complete.svg";

const Thanks = ({ clicked }) => {
  return (
    <section className="thanks-container" onClick={() => clicked()}>
      <ThankLogo className="thanks-logo" />
      <h1>Thank You !</h1>
      <p>We've added your card details</p>
      <button className="form-button">Continue</button>
    </section>
  );
};

export default Thanks;
