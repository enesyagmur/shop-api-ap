import React, { useState } from "react";
import Product from "./product";
import "./component.css";
import Basket from "./basket";

const List = ({ data }) => {
  const [basket, setBasket] = useState([0]);
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
          setBasket={setBasket}
          basket={basket}
          key={item.id}
        />
      ))}
      <Basket basket={basket} setBasket={setBasket} />
    </div>
  );
};

export default List;
