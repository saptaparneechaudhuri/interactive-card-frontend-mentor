import React from "react";
import "./Card.css";

import { ReactComponent as CardLogo } from "../../assets/card-logo.svg";

const Card = () => {
  return (
    <section className="card-container">
      <div className="card-front">
        <CardLogo className="card-logo" />
        <h1 className="card-number"> 0000 0000 0000 0000</h1>
        <div className="credentials">
          <h2>Jane Appleseed </h2>
          <p>00/00</p>
        </div>
      </div>
      <div className="card-back">
        <p>000</p>
      </div>
    </section>
  );
};

export default Card;
