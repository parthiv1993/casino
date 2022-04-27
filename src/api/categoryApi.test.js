import { doAPICall } from './apiHelper';
import fetchCategories from './categoryApi';

jest.mock('./apiHelper', () => ({
  ...jest.requireActual('./apiHelper'),
  doAPICall: jest.fn()
}));

describe('gamesApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    doAPICall.mockResolvedValue('response');
  });
  describe('fetchCategories', () => {
    it('should call apiHelper with correct params', async () => {
      await fetchCategories();
      expect(doAPICall).toHaveBeenCalledWith({
        url: 'http://localhost:3001/categories',
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
    });

    it('should return the response', async () => {
      const categoriesResponse = await fetchCategories();
      expect(categoriesResponse).toStrictEqual('response');
    });

    it('should throw error in case error is thrown', async () => {
      doAPICall.mockRejectedValue('eroor');
      let error;
      try {
        await fetchCategories();
      } catch (e) {
        error = e;
      }
      expect(error.message).toStrictEqual('SOMETHING_WENT_WRONG');
    });
  });
});
