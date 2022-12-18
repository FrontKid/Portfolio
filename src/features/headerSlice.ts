//react
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//store
import { RootState } from "../store/store";

interface IHeaderStates {
  toggle: boolean;
  activeNav: string;
}

const initialState: IHeaderStates = {
  toggle: false,
  activeNav: '#home',
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setToggle(state, action: PayloadAction<boolean>) {
      state.toggle = action.payload
    },
    setActiveNav(state, action: PayloadAction<string>) {
      state.activeNav = action.payload
    }
  },
})

export const selectorHeader = (state: RootState) => state.headerSlice

export const { setToggle, setActiveNav } = headerSlice.actions
export default headerSlice.reducer