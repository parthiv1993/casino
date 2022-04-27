import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import fetchGames from '../../api/gamesApi';
import GamesContext from './GamesContext';
import { filterGamesByCategory, filterGamesBySearchText } from './GamesHelper';

const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterCategory, setFilterCategory] = useState(null);
  const [searchText, setSearchText] = useState(null);

  const loadGames = useCallback(async () => {
    try {
      const response = await fetchGames();
      setGames(response);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadGames();
  }, [loadGames]);

  const filteredGames = useMemo(() => {
    const categoryFilteredGames = filterGamesByCategory(games, filterCategory);

    const categoryAndSearchFilteredText = filterGamesBySearchText(
      categoryFilteredGames,
      searchText
    );
    return categoryAndSearchFilteredText;
  }, [filterCategory, games, searchText]);
  return (
    <GamesContext.Provider
      value={{ games: filteredGames, isLoading, error, setFilterCategory, setSearchText }}>
      {children}
    </GamesContext.Provider>
  );
};

GamesProvider.propTypes = {
  children: PropTypes.node
};

export default GamesProvider;
