import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState();
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (user) {
      console.log({ user });
      const from = location.state?.from?.pathname || '/home';
      navigate(from, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const userSetter = useCallback((x) => {
    setUser(x);
  }, []);

  return (
    <LoginContext.Provider value={{ user, setUser: userSetter }}>{children}</LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default LoginProvider;
