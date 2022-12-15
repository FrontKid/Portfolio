import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputName: '',
  inputEmail: '',
  checkValidName: true,
  checkValidEmail: true,
}

export const contactValidationSlice = createSlice({
  name: 'validation',
  initialState,
  reducers: {
    setInputName(state, action) {
      state.inputName = action.payload

      if (!state.inputName.length) {
        state.checkValidName = true
      }
    },
    setInputEmail(state, action) {
      state.inputEmail = action.payload

      if (!state.inputEmail.length) {
        state.checkValidEmail = true
      }
    },
    setCheckValidName(state, action) {
      state.checkValidName = action.payload
    },
    setCheckValidEmail(state, action) {
      state.checkValidEmail = action.payload
    }
  }
})

export const validation = (state) => state.contactValidation

export const { setInputName, setInputEmail, setCheckValidName, setCheckValidEmail } = contactValidationSlice.actions
export default contactValidationSlice.reducer