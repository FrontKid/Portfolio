//react
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//store
import { RootState } from '../store/store'

interface IValidationStates {
  inputName: string;
  inputEmail: string;
  checkValidName: boolean;
  checkValidEmail: boolean;
}

const initialState: IValidationStates = {
  inputName: '',
  inputEmail: '',
  checkValidName: true,
  checkValidEmail: true,
}

export const contactValidationSlice = createSlice({
  name: 'validation',
  initialState,
  reducers: {
    setInputName(state, action: PayloadAction<string>) {
      state.inputName = action.payload

      if (!state.inputName.length) {
        state.checkValidName = true
      }
    },
    setInputEmail(state, action: PayloadAction<string>) {
      state.inputEmail = action.payload

      if (!state.inputEmail.length) {
        state.checkValidEmail = true
      }
    },
    setCheckValidName(state, action: PayloadAction<boolean>) {
      state.checkValidName = action.payload
    },
    setCheckValidEmail(state, action: PayloadAction<boolean>) {
      state.checkValidEmail = action.payload
    }
  }
})

export const validation = (state: RootState) => state.contactValidation

export const { setInputName, setInputEmail, setCheckValidName, setCheckValidEmail } = contactValidationSlice.actions
export default contactValidationSlice.reducer