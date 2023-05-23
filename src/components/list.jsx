import React from "react";
import Product from "./product";

const List = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <Product
          title={item.title}
          description={item.description}
          price={item.price}
          id={item.id}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default List;
