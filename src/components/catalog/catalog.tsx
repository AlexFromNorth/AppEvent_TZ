// Catalog.js

import { useDispatch, useSelector } from "react-redux";
import { CatalogItem, State } from "../../types/types";
import { addItem } from "../../store/itemsSlice";
import { Box, Grid } from "@mui/material";
import styles from "./Catalog.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Catalog() {
  const dispatch = useDispatch();

  // Получение всех элементов из каталога
  const items = useSelector<State, CatalogItem[]>((state) => state.items.catalog);

  // Создаем локальное состояние для отслеживания добавления в корзину для каждого элемента
  const [isAddedToCart, setIsAddedToCart] = useState({});

  useEffect(() => {
    // Получаем корзину из localStorage при инициализации компонента
    const basketFromLocalStorage = JSON.parse(localStorage.getItem("basket")) || {};
    setIsAddedToCart(basketFromLocalStorage);
  }, []);

  const handleAddToCart = (itemId) => {
    dispatch(addItem(items.find((item) => item.id === itemId))); // Добавляем элемент в корзину по id
    setIsAddedToCart({ ...isAddedToCart, [itemId]: true }); // Устанавливаем флаг isAddedToCart в true для данного элемента
  };

  return (
    <>
      <Box sx={{ marginTop: "100px" }}>
        <h2>Catalog</h2>
        <Grid container spacing={10}>
          {items.map((item: CatalogItem) => (
            // отрисовка одного элемента каталога
            <Grid item xs={4} key={item.id}>
              <p className={styles.catalog_item__name}>{item.name}</p>
              <div className={styles.catalog_item__img}>
                <img src={item.image} alt="item" />
              </div>
              <p>{item.price} руб.</p>

              {/* кнопки купить и в корзину */}
              <Box>
                {isAddedToCart[item.id] ? (
                  <Link to="/basket">
                    <Button>Переходим в корзину</Button>
                  </Link>
                ) : (
                  <Button onClick={() => handleAddToCart(item.id)}>
                    Добавить в корзину
                  </Button>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Catalog;
