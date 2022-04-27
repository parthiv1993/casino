import { doAPICall } from './apiHelper';
import fetchGames from './gamesApi';

jest.mock('./apiHelper', () => ({
  ...jest.requireActual('./apiHelper'),
  doAPICall: jest.fn()
}));

describe('gamesApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    doAPICall.mockResolvedValue('response');
  });
  describe('fetchGames', () => {
    it('should call apiHelper with correct params', async () => {
      await fetchGames();
      expect(doAPICall).toHaveBeenCalledWith({
        url: 'http://localhost:3001/games',
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
    });

    it('should return the response', async () => {
      const gamesResponse = await fetchGames();
      expect(gamesResponse).toStrictEqual('response');
    });

    it('should throw error in case error is thrown', async () => {
      doAPICall.mockRejectedValue('eroor');
      let error;
      try {
        await fetchGames();
      } catch (e) {
        error = e;
      }
      expect(error.message).toStrictEqual('SOMETHING_WENT_WRONG');
    });
  });
});
