import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ProductForm from "./Componetns/ProductForm";
import ProductList from "./Componetns/ProductList";
import Product from "./Componetns/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Product></Product>
    </>
  );
}

export default App;
