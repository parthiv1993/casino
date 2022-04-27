import { doesIncludeCaseInsensetiveSubString } from '../../helpers/utilities';

const keysToSearchText = ['name', 'description', 'code'];

export const filterGamesByCategory = (games, categoryId) => {
  if (!categoryId) {
    return games;
  }
  return games.filter((game) => game.categoryIds.indexOf(categoryId) > -1);
};

export const filterGamesBySearchText = (games, searchText) => {
  if (!searchText) {
    return games;
  }
  return games.filter((game) =>
    keysToSearchText.some((key) => doesIncludeCaseInsensetiveSubString(game[key], searchText))
  );
};
