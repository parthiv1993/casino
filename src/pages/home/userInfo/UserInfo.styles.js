import styled from 'styled-components';
import { Button, StyledText } from '../../../components';

export const UserInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: fit-content(30%);
  grid-template-rows: auto;
  gap: 0.25rem;
`;

export const AvatarContainer = styled.div`
  grid-column: 1;
  grid-row: 1/3;
`;

export const CustomerName = styled(StyledText).attrs({
  type: 'title'
})`
  grid-column: 2;
  grid-row: 1;
`;

export const Event = styled(StyledText).attrs({
  type: 'description'
})`
  grid-column: 2;
  grid-row: 2;
  margin: 0;
`;

export const LogOutButton = styled(Button).attrs({
  buttonType: 'secondary'
})`
  grid-column: 1/3;
  grid-row: 3;
  width: max-content;
`;
