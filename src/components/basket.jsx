import "./component.css";

const Basket = ({ basket, setBasket }) => {
  return (
    <div className="basket border rounded d-flex flex-column align-items-center justify-content-center">
      <p>{basket.length - 1}x</p>
      <p>{Math.round(basket.reduce((a, b) => a + b))}$</p>
      <button
        className="clear btn border border-danger"
        onClick={() => setBasket([0])}
      >
        clear
      </button>
    </div>
  );
};

export default Basket;
