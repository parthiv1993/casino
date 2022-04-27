const USERNAME_REGEX = new RegExp(/^[a-zA-Z0-9]+$/);
const PASSWORD_REGEX = new RegExp(/^[a-zA-Z0-9]+$/);

export const validateInput = ({ username, password }) => {
  if (!username || !password) {
    return 'LOGIN_EMPTY_INPUT';
  }

  if (!USERNAME_REGEX.test(username) || !PASSWORD_REGEX.test(password)) {
    return 'LOGIN_INVALID_FORMAT';
  }

  return null;
};
