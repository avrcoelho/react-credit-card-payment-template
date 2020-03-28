import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Payment from '../pages/Payment';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/payment" component={Payment} />
        <Redirect to="/payment" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
