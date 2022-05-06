import { configureStore, Store } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/CartSlice";
import teethReducer from "../features/teeth/teethSlice";

const EffStore: Store = configureStore({
  reducer: {
    cart: cartReducer,
    teeth: teethReducer,
  },
});

export type RootState = ReturnType<typeof EffStore.getState>;
export type AppDispatch = typeof EffStore.dispatch;

export default EffStore;
