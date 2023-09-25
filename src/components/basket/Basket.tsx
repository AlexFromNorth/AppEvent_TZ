import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CatalogItem, State } from "../../types/types";
import { removeItem } from "../../store/itemsSlice";

const Basket = () => {
  const dispatch = useDispatch();

  const basketItems = useSelector<State, CatalogItem[]>((state) => {
    return state.items.basket;
  });
  console.log(basketItems.length)

  return (
    <div>
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
    </div>
  );
};

export default Basket;
