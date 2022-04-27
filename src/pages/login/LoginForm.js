import { useCallback, useContext, useState } from 'react';
import { Button, Input } from '../../components';
import { validateInput } from './LoginForm.helpers';
import { StyledForm, ErrorMessage, LoginFormWrapper } from './LoginForm.styles';
import { login } from '../../api/loginApi';
import getLabel from '../../helpers/labels';
import getErrorMessages from '../../helpers/errorHelpers';
import LoginContext from '../../contexts/login/LoginContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { setUser } = useContext(LoginContext);

  const callLoginApi = useCallback(
    async (body) => {
      try {
        const response = await login(body);

        setUser({ ...response.player, username: body.username });
      } catch (e) {
        setError(e.message);
      }
    },
    [setUser]
  );

  const onFormSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const validationError = validateInput({ username, password });
      if (validationError) {
        setError(validationError);
      } else {
        await callLoginApi({ username, password });
      }
    },
    [callLoginApi, password, username]
  );

  return (
    <LoginFormWrapper>
      <StyledForm onSubmit={onFormSubmit}>
        <Input
          data-testid="username-input"
          suffixIcon="fa-solid fa-user"
          placeholder={getLabel('LOGIN_USERNAME_PLACEHOLDER')}
          type="text"
          onChange={setUsername}
          required
          name="username"
          autoFocus
        />
        <Input
          data-testid="password-input"
          suffixIcon="fa-solid fa-lock"
          placeholder={getLabel('LOGIN_PASSWORD_PLACEHOLDER')}
          type="password"
          name="password"
          onChange={setPassword}
          required
        />
        {error && (
          <ErrorMessage data-testid="error-message">{getErrorMessages(error)}</ErrorMessage>
        )}
        <Button type="submit" data-testid="submit-button">
          {getLabel('LOGIN_SUBMIT_BUTTON')}
        </Button>
      </StyledForm>
    </LoginFormWrapper>
  );
};

export default LoginForm;
