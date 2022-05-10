import { configureStore, Store } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/CartSlice";
import productsReducer from "../features/products/ProductsSlice";
import teethReducer from "../features/teeth/teethSlice";

const store: Store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    teeth: teethReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
