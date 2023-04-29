import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
    count: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      let isProductExist = false;
      if (state.products.length === 0) {
        state.products.push(action.payload);
        state.count += 1;
        state.totalPrice += action.payload.price;
        return;
      } else {
        state.products.forEach((item) => {
          if (item.id === action.payload.id) {
            item.count += 1;
            state.count += 1;
            state.totalPrice += action.payload.price;
            isProductExist = true;
          }
        });
        if (isProductExist) {
          return;
        }
        state.products.push(action.payload);
        state.count += 1;
        state.totalPrice += action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      state.count -= 1;
      state.products.forEach((item, index) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count -= 1;
          state.totalPrice -= item.price;
          return;
        } else if (item.id === action.payload.id && item.count === 1) {
          state.totalPrice -= item.price;
          state.products.splice(index, 1);
          return;
        }
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
