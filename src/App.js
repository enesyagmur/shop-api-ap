import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/list";

function App() {
  const [data, setData] = useState([]);

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

  return (
    <div className="App">
      <h1>apiSHOP</h1>
      <List data={data} />
    </div>
  );
}

export default App;
