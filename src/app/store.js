import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import currencyReducer from "../features/currency/currencySlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    cart: cartReducer,
  },
});
