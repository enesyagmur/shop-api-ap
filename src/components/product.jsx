import React from "react";

const Product = ({ title, price, description, category }) => {
  return (
    <div className="product">
      <h5>{title}</h5>
      <p>{description}</p>
      <p> {category}</p>

      <button>{price}$</button>
    </div>
  );
};

export default Product;
