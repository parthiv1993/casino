import { API, doAPICall } from './apiHelper';
import { fetchGamesURL } from './urls';

const fetchGames = async () => {
  try {
    return await doAPICall(
      new API({
        url: fetchGamesURL,
        method: 'get'
      })
    );
  } catch (e) {
    throw new Error('SOMETHING_WENT_WRONG');
  }
};

export default fetchGames;
