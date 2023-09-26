import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/itemsSlice";
import { Box } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button } from "react-bootstrap";
import styles from "./Basket.module.scss";

const Basket = () => {
  const dispatch = useDispatch();

  // Извлекаем корзину товаров из localStorage при загрузке компонента
  const initialBasketItems = JSON.parse(localStorage.getItem("basket")) || [];
  const [basketItems, setBasketItems] = useState(initialBasketItems);

  // Функция для вычисления суммы всех товаров в корзине
  const calculateTotalPrice = () => {
    return basketItems.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveItem = (item) => {
    const itemIndex = basketItems.findIndex(
      (basketItem) => basketItem.id === item.id
    );
    if (itemIndex !== -1) {
      const updatedBasket = [...basketItems];
      updatedBasket.splice(itemIndex, 1); // Удаляем выбранный элемент из массива
      localStorage.setItem("basket", JSON.stringify(updatedBasket)); // Обновляем localStorage
      setBasketItems(updatedBasket); // Обновляем состояние компонента
      dispatch(removeItem(item)); // Удаляем элемент из Redux
    }
  };

  return (
    <Box sx={{ minHeight: "78vh", marginTop: '100px' }}>

      <h2>Basket</h2>
      {basketItems.length === 0 && <h2>Корзина пуста</h2>}
      <ul>
        {basketItems.map((item) => (
          // отрисовка одного элемента корзины
          <li key={item.id} className={styles.item}>
            <span>{item.name} </span>
            <span className={styles.item_price}> Цена: {item.price} руб.</span>
            <Button
              onClick={() => {
                handleRemoveItem(item);
              }}
            >
              Убрать
              <HighlightOffIcon
                sx={{
                  marginBottom: "-7px",
                  marginLeft: "10px",
                  color: "#eb2a2a",
                }}
              />
            </Button>
          </li>
        ))}
      </ul>
      <Box sx={{ borderTop: "3px solid rgba(112, 105, 105, 0.253)" }}>
        <h3>Итого:</h3>
        <h4>Сумма: {calculateTotalPrice()} руб.</h4>
      </Box>
    </Box>
  );
};

export default Basket;
