import { useCallback, useContext } from 'react';
import GamesContext from '../../../contexts/games/GamesContext';
import { GameContainer } from './GameList.styles';
import { GameCard, Seperator, StyledText } from '../../../components';
import getLabel from '../../../helpers/labels';
import { useNavigate } from 'react-router-dom';

const GamesList = () => {
  const { games } = useContext(GamesContext);
  const navigate = useNavigate();

  const playGame = useCallback(
    (game) => {
      console.log(game);
      navigate(`/game/${game}`);
    },
    [navigate]
  );

  return (
    <>
      <StyledText type="title">{getLabel('HOME_SCREEN_GAMES_LIST_HEADER')}</StyledText>
      <Seperator />
      <GameContainer>
        {games.map((game) => (
          <GameCard {...game} key={game.code} onPlay={playGame} />
        ))}
      </GameContainer>
    </>
  );
};

export default GamesList;
