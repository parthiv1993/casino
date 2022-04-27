import GamesProvider from '../../contexts/games/GamesProvider';
import GameCategoryFilter from './gameCategoryFilters';
import GameSearchBar from './gameSearchBar';
import GamesList from './gamesList';
import {
  GameCategoryFilterContainer,
  GameListContainer,
  GameSearchBarContainer,
  HomeScreenWrapper,
  UserInfoContainer
} from './Home.styles';
import UserInfo from './userInfo';

const Home = () => {
  return (
    <>
      <GamesProvider>
        <HomeScreenWrapper>
          <UserInfoContainer>
            <UserInfo />
          </UserInfoContainer>
          <GameSearchBarContainer>
            <GameSearchBar />
          </GameSearchBarContainer>
          <GameCategoryFilterContainer>
            <GameCategoryFilter />
          </GameCategoryFilterContainer>
          <GameListContainer>
            <GamesList />
          </GameListContainer>
        </HomeScreenWrapper>
      </GamesProvider>
    </>
  );
};

export default Home;
