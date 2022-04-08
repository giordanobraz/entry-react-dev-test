import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "currency",
  initialState: {
    currency: "USD",
    symbol: "$",
  },
  reducers: {
    changeCurrency(state, { payload }) {
      return {
        ...state,
        currency: payload.currency,
        symbol: payload.symbol,
      };
    },
  },
});

export const { changeCurrency } = slice.actions;
export default slice.reducer;
