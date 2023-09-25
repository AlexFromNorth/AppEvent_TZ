import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./store/itemsSlice";
import { State, CatalogItem } from "./types/types";
// import apiCatalog from './api/api'

function App() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const items = useSelector<State, CatalogItem[]>(
    (state) => state.items.catalog
  );

  const basketItems = useSelector<State, CatalogItem[]>((state) => {
    console.log(state);
    return state.items.basket;
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button
        onClick={() => {
          dispatch(addItem({ text: "qqq" }));
        }}
      >
        btn
      </button>

      <h2>Catalog</h2>
      <ul>
        {items.map((item: CatalogItem) => (
          // <button onClick={() => {dispatch( addItem({ item }) )}}>
          //   <li key={item.id} >
          //     {item.name}
          //   </li>
          // </button>
          <li
            key={item.id}
            onClick={() => {
              dispatch(addItem(item));
              // console.log(item);
            }}
          >
            {item.name}
          </li>

          // <span key={item.id}>{item.text}</span>
        ))}
      </ul>

      <h2>Basket</h2>
      <ul>
        {basketItems.map((item: CatalogItem) => (
          <li
            key={item.id}
            onClick={() => {
              dispatch(removeItem(item));
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
