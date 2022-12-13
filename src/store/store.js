import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../features/headerSlice";
import workSLice from "../features/worksSLice";

export const store = configureStore({
  reducer: {
    headerSlice,
    workSLice,
  },
})