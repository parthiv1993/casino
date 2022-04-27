/* eslint-disable react/display-name */
import { render } from '@testing-library/react';
import LoginContext from '../../contexts/login/LoginContext';
import AuthWrapper from './AuthWrapper';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: (props) => <div props={JSON.stringify(props)} />,
  useLocation: () => 'location'
}));

const dummyUser = {
  name: 'mockUser',
  event: 'event String'
};

describe('AuthWrapper', () => {
  it('should render children if user is set in LoginContext', () => {
    const { container } = render(
      <LoginContext.Provider value={{ user: dummyUser }}>
        <AuthWrapper>This is dummy text</AuthWrapper>
      </LoginContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render navigate when user is not present', () => {
    const { container } = render(
      <LoginContext.Provider value={{ user: null }}>
        <AuthWrapper>This is dummy text</AuthWrapper>
      </LoginContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
