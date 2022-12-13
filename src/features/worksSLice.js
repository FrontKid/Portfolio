import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: { name: 'all' },
  projects: [],
  active: 0
}

export const workSLice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    setItem(state, action) {
      state.item = action.payload
    },
    setProjects(state, action) {
      state.projects = action.payload
    },
    setActive(state, action) {
      state.active = action.payload
    }
  }
})

export const selectorsWork = (state) => state.workSLice

export const { setItem, setProjects, setActive } = workSLice.actions
export default workSLice.reducer