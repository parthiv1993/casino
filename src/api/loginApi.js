import { API, doAPICall } from './apiHelper';
import { loginURL, logoutURL } from './urls';

export const login = async ({ username, password }) => {
  try {
    return await doAPICall(
      new API({
        url: loginURL,
        body: {
          username,
          password
        },
        method: 'post'
      })
    );
  } catch (e) {
    throw new Error('LOGIN_INVALID_CREDENTIALS');
  }
};

export const logout = async ({ username }) => {
  try {
    return await doAPICall(
      new API({
        url: logoutURL,
        body: {
          username
        },
        method: 'post'
      })
    );
  } catch (e) {
    throw new Error('SOMETHING_WENT_WRONG');
  }
};
