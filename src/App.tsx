import "./App.css";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";

function App() {
  return (
    <div>
      <h1>E-Commerce Cart</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <ProductList />
        <CartSummary />
      </div>
    </div>
  );
}

export default App;
