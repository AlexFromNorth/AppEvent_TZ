import { createSlice } from "@reduxjs/toolkit";
import { CatalogState } from "../types/types";
import apiCatalog from "../api/api";

// глобальный state
const initialState: CatalogState = {
  catalog: await apiCatalog(),
  basket: [],
};

// редусеры для изменения state
const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      state.basket.push(action.payload);
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    removeItem(state, action) {
      state.basket = state.basket.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
});

export const { addItem, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
