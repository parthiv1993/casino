import React from 'react';
import PropTypes from 'prop-types';
import getLabel from '../../helpers/labels';
import Button from '../Buttton';
import Seperator from '../Seperator';
import Icon from '../Icon';
import StyledText from '../StyledText';
import {
  GameActionsContainer,
  GameCardContainer,
  GameDescription,
  GameThumbnail,
  GameTitle
} from './GameCard.styles';
import { baseURL } from '../../api/urls';
const GameCard = ({ name, code, description, icon, onPlay }) => {
  const thumbnailLink = `${baseURL}/${icon}`;

  return (
    <>
      <GameCardContainer>
        <GameTitle>{name}</GameTitle>
        <GameThumbnail src={thumbnailLink} alt={`${name}-thumbnail`}></GameThumbnail>
        <GameDescription>{description}</GameDescription>
        <GameActionsContainer>
          <Button
            buttonType={'secondary'}
            onClick={() => onPlay(code)}
            data-testid={`${code}-play`}>
            <StyledText type="subTitle">{getLabel('HOME_SCREEN_GAMES_PLAY')}</StyledText>
            <Icon iconName="fa-solid fa-chevron-right" addMargin />
          </Button>
        </GameActionsContainer>
      </GameCardContainer>
      <Seperator />
    </>
  );
};

GameCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  onPlay: PropTypes.func,
  code: PropTypes.string
};

GameCard.defaultProps = {
  name: null,
  description: null,
  icon: null,
  code: null,
  onPlay: () => {}
};

export default React.memo(GameCard);
