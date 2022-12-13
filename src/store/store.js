import { configureStore } from "@reduxjs/toolkit";
import showMenu from "../features/showMenu";
import workSLice from "../features/worksSLice";

export const store = configureStore({
  reducer: {
    showMenu,
    workSLice,
  },
})