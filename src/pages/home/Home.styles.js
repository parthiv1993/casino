import styled from 'styled-components';
import { devicesMediaQueries } from '../../helpers/deviceHelper';

export const HomeScreenWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
  gap: 1.5em;
  padding: 2rem;
  ${devicesMediaQueries.whenMobile} {
    background: red;
    display: flex;
    flex-direction: column;
  }
  ${devicesMediaQueries.whenTablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const UserInfoContainer = styled.section`
  grid-column: 1 / 2;
  grid-row: 1;
  ${devicesMediaQueries.whenTablet} {
    grid-column: 1 / 3;
    grid-row: 1;
  }
`;

export const GameSearchBarContainer = styled.aside`
  grid-column: 2 / 3;
  grid-row: 1;
  ${devicesMediaQueries.whenTablet} {
    grid-column: 1;
    grid-row: 2;
  }
`;

export const GameListContainer = styled.section`
  grid-column: 1 / 2;
  grid-row: 2;
  ${devicesMediaQueries.whenTablet} {
    grid-column: 1 / 3;
    grid-row: 3;
  }
`;

export const GameCategoryFilterContainer = styled.aside`
  grid-column: 2 / 3;
  grid-row: 2;
  ${devicesMediaQueries.whenTablet} {
    grid-column: 2;
    grid-row: 2;
  }
`;
