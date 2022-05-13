import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CartState {
  items: {
    [id: string]: number;
  };
  values: [];
}

const initialState: CartState = {
  items: {},
  values: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state: RootState, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    getSelectedValues(state: RootState, action: PayloadAction<string>) {
      const value = action.payload;
      console.log(value);
      state.values.push(value);
    },
    removeFromCart(state: RootState, action: PayloadAction<string>) {
      delete state.items[action.payload];
    },
    updateQuantity(
      state: RootState,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      state.items[id] = quantity;
    },
  },
});

export const { addToCart, getSelectedValues, removeFromCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

export function getNumItems(state: RootState) {
  let numItems = 0;
  for (let id in state.cart.items) {
    numItems += state.cart.items[id];
  }

  return numItems;
}

export const getMemoizedNumItems: any = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    let numItems = 0;
    for (let id in items) {
      numItems += items[id];
    }
    return numItems;
  }
);
