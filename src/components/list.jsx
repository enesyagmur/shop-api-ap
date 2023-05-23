import React from "react";
import Product from "./product";

const List = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Product title={item.title} />
      ))}
    </div>
  );
};

export default List;
