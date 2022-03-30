import { configureStore, Store } from "@reduxjs/toolkit";

import teethReducer from "../features/teeth/teethSlice";

const EffStore: Store = configureStore({
  reducer: {
    teeth: teethReducer,
  },
} as any);

export type RootState = ReturnType<typeof EffStore.getState>;

export default EffStore;
