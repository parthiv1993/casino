import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components';
import { GameContainer } from './Game.styles';

const Game = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      window.comeon.game.launch(code);
    }
  }, [code]);

  const navigateToHomePage = useCallback(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <>
      <GameContainer>
        <Button onClick={navigateToHomePage}>Back to Home Page</Button>
        <div id="game-launch"></div>
      </GameContainer>
    </>
  );
};

export default Game;
