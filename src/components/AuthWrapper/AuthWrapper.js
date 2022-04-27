import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import LoginContext from '../../contexts/login/LoginContext';

const AuthWrapper = ({ children }) => {
  const { user } = useContext(LoginContext);
  let location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

AuthWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthWrapper;
