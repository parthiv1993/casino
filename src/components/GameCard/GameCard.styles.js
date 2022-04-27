import styled from 'styled-components';
import { devicesMediaQueries } from '../../helpers/deviceHelper';
import StyledText from '../StyledText';

export const GameCardContainer = styled.article`
  display: grid;
  grid-template-columns: fit-content(30%);
  grid-template-rows: auto;
  gap: 1rem;

  ${devicesMediaQueries.whenMobile} {
    display: block;
  }
`;

export const GameThumbnail = styled.img.attrs({ height: 'auto', width: '100%' })`
  grid-column: 1;
  grid-row: 1/3;
`;

export const GameTitle = styled(StyledText).attrs({
  type: 'title'
})`
  grid-column: 2;
  grid-row: 1;
  display: none;
`;

export const GameDescription = styled(StyledText).attrs({
  type: 'description'
})`
  grid-column: 2;
  grid-row: 2;
`;

export const GameActionsContainer = styled.div`
  grid-column: 2;
  grid-row: 3;
  text-align: right;
`;
