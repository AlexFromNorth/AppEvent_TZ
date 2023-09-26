import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CatalogItem, State } from "../../types/types";
import { removeItem } from "../../store/itemsSlice";
import { Box } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button } from "react-bootstrap";
import styles from './Basket.module.scss'

const Basket = () => {
  const dispatch = useDispatch();

  // Получение всех элементов из корзины
  const basketItems = useSelector<State, CatalogItem[]>((state) => {
    return state.items.basket;
  });

  // Функция для вычисления суммы всех товаров в корзине
  const calculateTotalPrice = () => {
    return basketItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Box sx={{ minHeight: "78vh" }}>
      <h2>Basket</h2>
      {basketItems.length === 0 && <h2>Корзина пуста</h2>}
      <ul>
        {basketItems.map((item: CatalogItem) => (
          // отрисовка одного элемента корзины
          <li key={item.id} className={styles.item}>
            <span>{item.name} </span>
            <span className={styles.item_price}> Цена: {item.price} руб.</span>
            <Button
              onClick={() => {
                dispatch(removeItem(item));
              }}
            >
              Убрать
              
              <HighlightOffIcon sx={{marginBottom: '-7px', marginLeft: '10px', color: '#eb2a2a'}}/>
            </Button>
          </li>
        ))}
      </ul>
      {/* <hr /> */}
      <Box sx={{borderTop: '3px solid rgba(112, 105, 105, 0.253)'}}>
        <h3>Итого:</h3>
        <h4>Сумма: {calculateTotalPrice()} руб.</h4>
      </Box>
    </Box>
  );
};

export default Basket;
