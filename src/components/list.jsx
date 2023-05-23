import React from "react";
import Product from "./product";

const List = ({ data }) => {
  console.log(data);
  return (
    <div className="list d-flex flex-wrap flex-column flex-sm-row align-items-center  ">
      {data.map((item) => (
        <Product
          title={item.title}
          description={item.description}
          price={item.price}
          id={item.id}
          category={item.category}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default List;
