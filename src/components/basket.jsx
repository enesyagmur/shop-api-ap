import React from "react";
import "./component.css";

const Basket = ({ basket }) => {
  return (
    <div className="basket border rounded d-flex flex-column align-items-center">
      <p>{basket.length}x</p>
      <p>{basket.length}$</p>
    </div>
  );
};

export default Basket;
