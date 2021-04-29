import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({
  isAuthenticated,
  component: PrivateComponente,
  ...rest }) => {
  localStorage.setItem('lastPath', rest.location.pathname);
  return (
    <Route {...rest} render={(props) => (
      (isAuthenticated)
        ? <PrivateComponente {...props} />
        : <Redirect to="/login" />
    )}/>
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}