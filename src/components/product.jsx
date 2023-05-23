import React from "react";
import "./component.css";

const Product = ({ title, price, category, image, basket, setBasket }) => {
  const addToBasket = () => {
    setBasket([...basket, price]);
  };

  return (
    <div
      style={{ height: "350px" }}
      className="product d-flex flex-column w-25 p-3 m-5 justify-content-evenly align-items-center border"
    >
      <img style={{ width: "120px", height: "120px" }} src={image} />
      <p>{title}</p>

      <p> {category}</p>

      <button
        onClick={addToBasket}
        style={{ width: "100px" }}
        className="border p-1"
      >
        {price}$
      </button>
    </div>
  );
};

export default Product;
