//react
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//type
import { IProjectsData } from "../components/work/data";
import { IProjectNav } from "../components/work/data";

//store
import { RootState } from "../store/store";

interface IWorkStates {
  item: IProjectNav;
  projects: IProjectsData[];
  active: number;
}

const initialState: IWorkStates = {
  item: { name: 'all' },
  projects: [],
  active: 0
}

export const workSLice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<IProjectNav>) {
      state.item = action.payload
    },
    setProjects(state, action: PayloadAction<IProjectsData[]>) {
      state.projects = action.payload
    },
    setActive(state, action: PayloadAction<number>) {
      state.active = action.payload
    }
  }
})

export const selectorsWork = (state: RootState) => state.workSLice

export const { setItem, setProjects, setActive } = workSLice.actions
export default workSLice.reducer