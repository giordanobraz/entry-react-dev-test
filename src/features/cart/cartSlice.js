import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, { payload }) {
      return { ...state, items: [...state.items, payload] };
      // const item = state.items.find(
      //   (item) => item.product.id === payload.product.id
      // );
      // if (item) {
      //   item.quantity += 1;
      // } else {
      //   return { ...state, items: [...state.items, payload] };
      // }
    },
    removeFromCart(state, { payload }) {
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== payload),
      };
    },
    increment(state, { payload }) {
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    },
    decrement(state, { payload }) {
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
