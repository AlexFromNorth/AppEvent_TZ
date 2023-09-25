import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./store/itemsSlice";
import { Item, ItemsState } from "./types/types";
// import apiCatalog from './api/api'

function App() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const items = useSelector<ItemsState, Item[]>((state) => state.items.items);

  console.log(items)
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
          dispatch(addItem({ text:'qqq' }));
        }}
      >
        btn
      </button>

      <ul>
        {items.map((item:Item) => (
          <li key={item.id}>{item.text}</li>
          // <span key={item.id}>{item.text}</span>
        ))}
      </ul>
    </>
  );
}

export default App;
