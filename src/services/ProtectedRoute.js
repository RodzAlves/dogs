import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { login } = useContext(UserContext);

  if (login === true) {
    return <Route {...props} />;
  } else if (login === false) {
    return <Redirect to="/login" />;
  } else return null;
};

export default ProtectedRoute;
