import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/list";
import Header from "./components/header";

function App() {
  const [data, setData] = useState([]);
  const [copyData, setcopyData] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((veri) => {
        setData(veri);
        setcopyData(veri);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header data={data} setData={setData} copyData={copyData} />
      <List data={data} />
    </div>
  );
}

export default App;
