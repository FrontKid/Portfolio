import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
}

export const showMenu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setToggle(state, action) {
      state.toggle = action.payload
    },
  },
})

export const selectorToggle = state => state.showMenu.toggle

export const { setToggle } = showMenu.actions
export default showMenu.reducer