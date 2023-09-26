// itemsSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { CatalogState } from "../types/types";
import apiCatalog from "../api/api";

const initialState: CatalogState = {
  catalog: await apiCatalog(),
  basket: JSON.parse(localStorage.getItem("basket")) || [], // Инициализируем корзину из localStorage
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      state.basket.push(action.payload);
      localStorage.setItem("basket", JSON.stringify(state.basket)); // Сохраняем корзину в localStorage
    },
    removeItem(state, action) {
      state.basket = state.basket.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("basket", JSON.stringify(state.basket)); // Сохраняем корзину в localStorage
    },
  },
});

export const { addItem, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
