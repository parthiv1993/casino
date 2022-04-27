import styled from 'styled-components';

export const LoginFormWrapper = styled.section`
  max-width: 400px;
  background-color: ${({ theme }) => theme.Login.formBackground};
  padding: 4rem 1rem;
  margin: auto;
  width: 100%;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.Login.errorMessages};
  margin: 0;
  text-align: center;
`;
