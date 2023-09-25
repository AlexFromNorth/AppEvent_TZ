import { createSlice } from "@reduxjs/toolkit";
import { CatalogState } from "../types/types";
import apiCatalog from "../api/api";

// const catalogState:CatalogState = {
//   catalog: await apiCatalog<CatalogItem[]>(),
// }
// console.log(catalogState())

const initialState: CatalogState = {
  catalog: await apiCatalog(),
  basket: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      state.basket.push(action.payload);
    },
    removeItem(state, action) {
      state.basket = state.basket.filter((item) => item.id !== action.payload.id);
    },
  },
});
// console.log(initialState);
// console.log()

export const { addItem, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
