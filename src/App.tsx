import { Route, Routes } from "react-router-dom";
import "./App.css";
import Catalog from "./components/catalog/Catalog";
import Header from "./components/header/Header";
import Basket from "./components/basket/Basket";

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  );
}

export default App;
