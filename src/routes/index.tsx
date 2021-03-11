import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import PublicRoute from 'routes/components/public-route';
import PrivateRoute from 'routes/components/private-route';
import makePath from 'routes/helpers/make-path';
import COMPONENTS from 'routes/constants/components';
import VIEWS from 'routes/constants/views';

const Routes = () => {
  return (
    <Switch>
      <PublicRoute path={makePath(VIEWS.LOGIN)} component={COMPONENTS.LOGIN} />
      <PrivateRoute path={makePath(VIEWS.HOME)} component={COMPONENTS.HOME} />
      <Redirect to={makePath(VIEWS.HOME)} />
    </Switch>
  );
};

export default Routes;
