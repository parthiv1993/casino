import { doAPICall } from './apiHelper';
import { login, logout } from './loginApi';

jest.mock('./apiHelper', () => ({
  ...jest.requireActual('./apiHelper'),
  doAPICall: jest.fn()
}));

describe('loginAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    doAPICall.mockResolvedValue('response');
  });
  describe('login', () => {
    it('should call apiHelper with correct params', async () => {
      await login({ username: 'user', password: 'pass' });
      expect(doAPICall).toHaveBeenCalledWith({
        url: 'http://localhost:3001/login',
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: '{"username":"user","password":"pass"}'
      });
    });

    it('should return the response', async () => {
      const loginResponse = await login({ username: 'user', password: 'pass' });
      expect(loginResponse).toStrictEqual('response');
    });

    it('should throw error in case error is thrown', async () => {
      doAPICall.mockRejectedValue('eroor');
      let error;
      try {
        await login({ username: 'user', password: 'pass' });
      } catch (e) {
        error = e;
      }
      expect(error.message).toStrictEqual('LOGIN_INVALID_CREDENTIALS');
    });
  });

  describe('logout', () => {
    it('should call apiHelper with correct params', async () => {
      await logout({ username: 'user' });
      expect(doAPICall).toHaveBeenCalledWith({
        url: 'http://localhost:3001/logout',
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: '{"username":"user"}'
      });
    });

    it('should return the response', async () => {
      const logoutResponse = await logout({ username: 'user' });
      expect(logoutResponse).toStrictEqual('response');
    });

    it('should throw error in case error is thrown', async () => {
      doAPICall.mockRejectedValue('eroor');
      let error;
      try {
        await logout({ username: 'user' });
      } catch (e) {
        error = e;
      }
      expect(error.message).toStrictEqual('SOMETHING_WENT_WRONG');
    });
  });
});
