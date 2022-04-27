import styled from 'styled-components';

export const StyledIcon = styled.i`
  ${({ addMargin }) =>
    addMargin
      ? `
        margin-inline: 4px;
    `
      : ``};
`;
