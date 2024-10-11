import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import { apiSlice } from "./services/Api";
export const store = configureStore({
  reducer: { auth: authSlice, [apiSlice.reducerPath]: apiSlice.reducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
