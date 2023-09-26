import { Avatar, Box } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import {  useSelector } from "react-redux";
import { CatalogItem, State } from "../../types/types";

const Header = () => {

      // Получение всех элементов из каталога
  const basketItems = useSelector<State, CatalogItem[]>((state) => {
    return state.items.basket;
  });

  return (
    <header className={styles.header}>
      <Box>
        <Avatar alt="logo" src={logo} />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "20%" }}
      >
        <Box>
          <Link to="/">Catalog</Link>
        </Box>
        <Box>
          <Link to="/basket">
            <ShoppingCartIcon />
            <span>{basketItems.length}</span>
          </Link>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
