import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  activeNav: '#home',
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setToggle(state, action) {
      state.toggle = action.payload
    },
    setActiveNav(state, action) {
      state.activeNav = action.payload
    }
  },
})

export const selectorHeader = state => state.headerSlice

export const { setToggle, setActiveNav } = headerSlice.actions
export default headerSlice.reducer