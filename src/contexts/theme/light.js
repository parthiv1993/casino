import { white, blackAlpha15, darkGray, red, black, none, blue, lightBlue } from './colors';

export default {
  Button: {
    primary: {
      background: white,
      borderColor: blackAlpha15,
      fontColor: darkGray,
      borderWidth: '1px',
      outline: blue
    },
    secondary: {
      background: black,
      borderColor: none,
      fontColor: white,
      borderWidth: '0px',
      outline: lightBlue
    }
  },
  Input: {
    background: white,
    borderColor: blackAlpha15,
    outline: blue
  },
  Login: {
    background: darkGray,
    formBackground: white,
    errorMessages: red
  }
};
