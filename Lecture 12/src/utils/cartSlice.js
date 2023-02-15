import { createSlice } from "@reduxjs/toolkit";
import store from "./store";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Ankush"],
  },
  reducers: {
    addItem: (state, actions) => {
      state.items.push(actions.payload);
    },
    removeItem: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
