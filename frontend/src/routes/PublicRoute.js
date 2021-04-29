import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

export const PublicRoute = ({
  isAuthenticated,
  component: PublicComponent,
  ...rest }) => {
  return (
    <Route {...rest} component={(props) => (
      (!isAuthenticated)
        ? <PublicComponent {...props} />
        : <Redirect to="/" />
    )} />
  )
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}
