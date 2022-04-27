import LoginContext from '../../contexts/login/LoginContext';
import { renderComponentWithLightTheme } from '../../testUtils';
import { login } from '../../api/loginApi';
import LoginForm from './LoginForm';
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

const mockSetUser = jest.fn();
const mockContextValue = { setUser: mockSetUser };

jest.mock('../../api/loginApi', () => ({
  ...jest.requireActual('../../api/loginApi'),
  login: jest.fn()
}));

const mockUser = {
  name: 'Parthiv',
  event: 'This is event',
  avatar: 'avatar/link'
};

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    login.mockResolvedValue({ player: mockUser });
  });

  it('should match snapshot', () => {
    const { container } = renderComponentWithLightTheme(
      <LoginContext.Provider value={mockContextValue}>
        <LoginForm />
      </LoginContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should call login and set user in context when login is successfull', async () => {
    const { getByTestId, queryByTestId } = renderComponentWithLightTheme(
      <LoginContext.Provider value={mockContextValue}>
        <LoginForm />
      </LoginContext.Provider>
    );
    fireEvent.change(getByTestId('username-input'), { target: { value: 'username1' } });
    fireEvent.change(getByTestId('password-input'), { target: { value: 'password1' } });
    await act(async () => {
      await fireEvent.click(getByTestId('submit-button'));
    });
    expect(queryByTestId('error-message')).toBeNull();
    expect(login).toHaveBeenCalledTimes(1);
    expect(login).toHaveBeenCalledWith({ username: 'username1', password: 'password1' });
    expect(mockSetUser).toHaveBeenCalledTimes(1);
    expect(mockSetUser).toHaveBeenCalledWith({ ...mockUser, username: 'username1' });
  });

  it('should not call login and show error message when username is empty', async () => {
    const { container, getByTestId } = renderComponentWithLightTheme(
      <LoginContext.Provider value={mockContextValue}>
        <LoginForm />
      </LoginContext.Provider>
    );
    fireEvent.change(getByTestId('username-input'), { target: { value: '' } });
    fireEvent.change(getByTestId('password-input'), { target: { value: 'password1' } });
    await act(async () => {
      await fireEvent.click(getByTestId('submit-button'));
    });
    expect(getByTestId('error-message')).toBeDefined();
    expect(getByTestId('error-message')).toHaveTextContent('Please fill in username and passeord');
    expect(container).toMatchSnapshot();
    expect(login).toHaveBeenCalledTimes(0);
    expect(mockSetUser).toHaveBeenCalledTimes(0);
  });

  it('should not call login and show error message when username is invalid', async () => {
    const { getByTestId } = renderComponentWithLightTheme(
      <LoginContext.Provider value={mockContextValue}>
        <LoginForm />
      </LoginContext.Provider>
    );
    fireEvent.change(getByTestId('username-input'), { target: { value: '$$$' } });
    fireEvent.change(getByTestId('password-input'), { target: { value: 'password1' } });
    await act(async () => {
      await fireEvent.click(getByTestId('submit-button'));
    });
    expect(getByTestId('error-message')).toBeDefined();
    expect(getByTestId('error-message')).toHaveTextContent(
      'Please fill in correct format username and password'
    );

    expect(login).toHaveBeenCalledTimes(0);
    expect(mockSetUser).toHaveBeenCalledTimes(0);
  });

  it('should not call login and show error message when password is empty', async () => {
    const { getByTestId } = renderComponentWithLightTheme(
      <LoginContext.Provider value={mockContextValue}>
        <LoginForm />
      </LoginContext.Provider>
    );
    fireEvent.change(getByTestId('username-input'), { target: { value: 'username1' } });
    fireEvent.change(getByTestId('password-input'), { target: { value: '' } });
    await act(async () => {
      await fireEvent.click(getByTestId('submit-button'));
    });
    expect(getByTestId('error-message')).toBeDefined();
    expect(getByTestId('error-message')).toHaveTextContent('Please fill in username and passeord');
    expect(login).toHaveBeenCalledTimes(0);
    expect(mockSetUser).toHaveBeenCalledTimes(0);
  });

  it('should not call login and show error message when username is invalid', async () => {
    const { getByTestId } = renderComponentWithLightTheme(
      <LoginContext.Provider value={mockContextValue}>
        <LoginForm />
      </LoginContext.Provider>
    );
    fireEvent.change(getByTestId('username-input'), { target: { value: 'username' } });
    fireEvent.change(getByTestId('password-input'), { target: { value: 'password1@@@' } });
    await act(async () => {
      await fireEvent.click(getByTestId('submit-button'));
    });
    expect(getByTestId('error-message')).toBeDefined();
    expect(getByTestId('error-message')).toHaveTextContent(
      'Please fill in correct format username and password'
    );

    expect(login).toHaveBeenCalledTimes(0);
    expect(mockSetUser).toHaveBeenCalledTimes(0);
  });

  it('should show error message in case api call fails', async () => {
    login.mockRejectedValue(new Error('LOGIN_INVALID_CREDENTIALS'));
    const { getByTestId } = renderComponentWithLightTheme(
      <LoginContext.Provider value={mockContextValue}>
        <LoginForm />
      </LoginContext.Provider>
    );
    fireEvent.change(getByTestId('username-input'), { target: { value: 'username' } });
    fireEvent.change(getByTestId('password-input'), { target: { value: 'password1' } });
    await act(async () => {
      await fireEvent.click(getByTestId('submit-button'));
    });
    expect(getByTestId('error-message')).toBeDefined();
    expect(getByTestId('error-message')).toHaveTextContent('Please enter valid credentials');

    expect(login).toHaveBeenCalledTimes(1);
    expect(mockSetUser).toHaveBeenCalledTimes(0);
  });
});
