import { setCheckValidEmail, setCheckValidName } from '../../features/contactValidationSlice';

const formValidation = (inputName: string, inputEmail: string, dispatch): boolean => {
  //name validation
  if (!inputName) {
    dispatch(setCheckValidName(false))
    return false
  }

  for (let i = 0; i < inputName.length; i++) {
    const inputNameLetter = inputName[i]

    if (inputNameLetter.toLowerCase() === inputNameLetter.toUpperCase()) {
      dispatch(setCheckValidName(false))
      return false
    } else {
      dispatch(setCheckValidName(true))
    }
  }

  //email validation
  const checkValidEmail = String(inputEmail)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (!checkValidEmail) {
    dispatch(setCheckValidEmail(false))
    return false
  } else {
    dispatch(setCheckValidEmail(true))
  }

  return true
}

export default formValidation