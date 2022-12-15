import { configureStore } from "@reduxjs/toolkit";
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