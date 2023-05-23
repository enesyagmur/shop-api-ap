import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((veri) => {
        setData(veri);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="App"></div>;
}

export default App;
