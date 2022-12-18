//react
import { configureStore } from "@reduxjs/toolkit";

//slice
import headerSlice from "../features/headerSlice";
import workSLice from "../features/worksSLice";
import contactValidation from "../features/contactValidationSlice";

export const store = configureStore({
  reducer: {
    headerSlice,
    workSLice,
    contactValidation,
  },
})

export type RootState = ReturnType<typeof store.getState>