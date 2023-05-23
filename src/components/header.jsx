import React from "react";
import "./component.css";

const Header = ({ data, setData, copyData }) => {
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
  const kadin = "women's clothing";
  const erkek = "men's clothing";
  const aksesuar = "jewelery";
  const elektronik = "electronics";

  const category = (categoryName) => {
    const newArr = [...data];

    setData(newArr.filter((item) => item.category === categoryName));
  };

  const temizle = () => {
    setData(copyData);
  };

  return (
    <div className="header border border-bottom p-3">
      <h1>SHOP</h1>
      <div className="d-flex p-2 justify-content-center">
        <button onClick={() => category(kadin)}>Kadın</button>
        <button onClick={() => category(erkek)}>Erkek</button>
        <button onClick={() => category(aksesuar)}>Aksesuar</button>
        <button onClick={() => category(elektronik)}>Elektronik</button>
        <button onClick={artan}>Artan</button>
        <button onClick={azalan}>Azalan</button>
        <button onClick={temizle}>Sıfırla</button>
      </div>
    </div>
  );
};

export default Header;
