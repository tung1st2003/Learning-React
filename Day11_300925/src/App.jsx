import { useState, useMemo, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { use } from "react";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);
  const focus = useRef();

  const handleCLick = () => {
    setProduct([
      ...product,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");

    focus.current.focus();
  };
  const total = useMemo(() => {
    const result = product.reduce((total, prod) => {
      console.log("tinh lai");
      return total + prod.price;
    }, 0);
    return result;
  }, [product]);
  return (
    <>
      <input
        ref={focus}
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <input
        value={price}
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        type="text"
      />
      <button onClick={handleCLick}>Add</button>
      Total:{total}
      {product.map((product, index) => {
        return (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        );
      })}
    </>
  );
}

export default App;
