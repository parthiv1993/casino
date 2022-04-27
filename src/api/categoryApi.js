import { API, doAPICall } from './apiHelper';
import { fetchCategoriesURL } from './urls';

const fetchCategories = async () => {
  try {
    return await doAPICall(
      new API({
        url: fetchCategoriesURL,
        method: 'get'
      })
    );
  } catch (e) {
    throw new Error('SOMETHING_WENT_WRONG');
  }
};

export default fetchCategories;
