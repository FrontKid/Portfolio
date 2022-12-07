import { configureStore } from "@reduxjs/toolkit";
import showMenu from "../features/showMenu";

export const store = configureStore({
  reducer: {
    showMenu,
  },
})