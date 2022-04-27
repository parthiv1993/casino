import { API } from './apiHelper';

describe('apiHelper', () => {
  describe('API', () => {
    it('should return API object', () => {
      const api = API({
        url: 'url',
        method: 'method',
        body: { name: 'test', age: 10 },
        headers: { authorization: 'bearer' }
      });
      expect(api).toStrictEqual({
        url: 'url',
        method: 'method',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: 'bearer'
        },
        body: '{"name":"test","age":10}'
      });
    });
  });
});
