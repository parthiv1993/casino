import styled from 'styled-components';

const StyledButton = styled.button`
  ${({ fullWidth }) => (fullWidth ? `width : 100%` : ``)};
  ${({ theme, buttonType }) => `
  background: ${theme.Button[buttonType].background};
  border-width : ${theme.Button[buttonType].borderWidth};
  border-color : ${theme.Button[buttonType].borderColor};
  color: ${theme.Button[buttonType].fontColor};
  `}
  cursor: pointer;
  padding: 0.5em;
  border-radius: 4px;
  &&:focus {
    outline: 2px solid blue;
  }
`;

export default StyledButton;
