import { createSlice } from "@reduxjs/toolkit";
import { ItemsState } from "../types/types";



const initialState: ItemsState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
  },
});
console.log(12333)

export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer;
