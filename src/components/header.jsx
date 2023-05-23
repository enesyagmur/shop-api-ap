import React from "react";
import "./component.css";

const Header = ({ data, setData }) => {
  const artan = () => {
    const newArr = [...data];
    newArr.sort((a, b) => a.price - b.price);
    setData(newArr);
  };

  const azalan = () => {
    const newArr = [...data];
    newArr.sort((a, b) => b.price - a.price);
    setData(newArr);
  };

  return (
    <div className=" border border-bottom p-3">
      <h1>Shop</h1>
      <div className="d-flex justify-content-between p-2">
        <div>kategori</div>
        <div>
          <button onClick={artan}>artan</button>
          <button onClick={azalan}>azalan</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
