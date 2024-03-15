import { configureStore } from "@reduxjs/toolkit";
import cartreducers from "./cartreducers";

export const store = configureStore({
  reducer: {
    cartApi: cartreducers,
  },
});
