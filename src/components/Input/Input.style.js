import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 0;
  outline: none;
  padding: 0;
  flex: 1;
  background: transparent;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  ${({ theme }) => `
        border: 1px solid ${theme.Input.borderColor};
        background-color: ${theme.Input.background};
        &&:focus-within {
          outline: 2px solid ${theme.Input.outline};
        }
    `};
  border-radius: 4px;
  display: flex;
  gap: 0.5em;
  padding: 0.5em;
`;
