import { createSlice } from "@reduxjs/toolkit";

const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;
  if (a.prototype !== b.prototype) return false;
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((k) => equals(a[k], b[k]));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, { payload }) {
      const { items } = state;
      const { product, selectedAttributes, quantity } = payload;

      const productWithNewId = {
        ...product,
        id: new Date().getTime(),
      };

      const item = {
        product: productWithNewId,
        selectedAttributes,
        quantity,
      };

      const itemExists = items.find((i) =>
        equals(i.selectedAttributes, item.selectedAttributes)
      );

      if (itemExists) {
        itemExists.quantity += item.quantity;
      } else {
        items.push(item);
      }

      state.items = items;
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
