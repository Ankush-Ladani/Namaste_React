import { createSlice } from "@reduxjs/toolkit";
import store from "./store";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, actions) => {
      state.items.push(actions.payload);
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
