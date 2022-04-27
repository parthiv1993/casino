import { useContext } from 'react';
import { Input } from '../../../components';
import GamesContext from '../../../contexts/games/GamesContext';
import getLabel from '../../../helpers/labels';
import { debounce } from '../../../helpers/utilities';

const GameSearchBar = () => {
  const { setSearchText } = useContext(GamesContext);
  const debounceOnChange = debounce((searchText) => {
    setSearchText(searchText);
  }, 1000);

  return (
    <Input
      suffixIcon="fa-solid fa-search"
      placeholder={getLabel('HOME_SEARCH_PLACEHOLDER')}
      type="text"
      onChange={debounceOnChange}
    />
  );
};

export default GameSearchBar;
