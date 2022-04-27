import { useCallback, useContext, useEffect, useState } from 'react';
import fetchCategories from '../../../api/categoryApi';
import { StyledText } from '../../../components';
import Seperator from '../../../components/Seperator';
import GamesContext from '../../../contexts/games/GamesContext';
import getLabel from '../../../helpers/labels';
import { GameCategory, GameCategoryList } from './GameCategoryFilter.styles';

const GameCategoryFilter = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const loadCategories = useCallback(async () => {
    try {
      const response = await fetchCategories();
      setCategories(response);
    } catch (e) {
      setError(e);
    }
  }, []);

  useEffect(() => loadCategories(), [loadCategories]);

  const { setFilterCategory } = useContext(GamesContext);

  const onCategorySelection = useCallback(
    (categoryId) => {
      setFilterCategory(categoryId);
    },
    [setFilterCategory]
  );

  return (
    <>
      <StyledText type="title">{getLabel('HOME_CATEGORIES')}</StyledText>
      <Seperator />
      {error ? (
        <StyledText>{getLabel('UNABLE_TO_FETCH_CATEGORIES')}</StyledText>
      ) : (
        <GameCategoryList>
          {categories.map((category) => (
            <GameCategory key={category.id} onClick={() => onCategorySelection(category.id)}>
              <StyledText type="subTitle" tabIndex={0}>
                {category.name}
              </StyledText>
            </GameCategory>
          ))}
        </GameCategoryList>
      )}
    </>
  );
};

export default GameCategoryFilter;
