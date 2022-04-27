import { fireEvent } from '@testing-library/react';
import { renderComponentWithLightTheme } from '../../testUtils';
import GameCard from './GameCard';

const mockOnPlay = jest.fn();

const dummyGame = {
  name: 'gameName',
  code: 'gameCode',
  description: 'gameDescription',
  icon: 'gameIcon',
  onPlay: mockOnPlay
};

describe('GameCard', () => {
  it('should match snapshot', () => {
    const { container } = renderComponentWithLightTheme(<GameCard {...dummyGame} />);
    expect(container).toMatchSnapshot();
  });

  it('should call onPlay when clicked on Play button', () => {
    const { getByTestId } = renderComponentWithLightTheme(<GameCard {...dummyGame} />);
    const playButton = getByTestId('gameCode-play');
    fireEvent.click(playButton);
    expect(mockOnPlay).toHaveBeenCalledTimes(1);
    expect(mockOnPlay).toHaveBeenCalledWith('gameCode');
  });
});
