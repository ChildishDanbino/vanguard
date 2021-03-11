import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import makePath from 'routes/helpers/make-path';

import VIEWS from 'routes/constants/views';
import { IRoute } from 'types/routes';

const PublicRoute = ({ component: Component, ...rest }: IRoute) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('authToken') ? (
        <Redirect
          to={{
            pathname: makePath(VIEWS.HOME)
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PublicRoute;
