//react
import { configureStore } from "@reduxjs/toolkit";

//slices
import headerSlice from "../features/header/slice";
import workSLice from "../features/works/slice";
import contactValidation from "../features/contacts/slice";

export const store = configureStore({
  reducer: {
    headerSlice,
    workSLice,
    contactValidation,
  },
})

export type RootState = ReturnType<typeof store.getState>