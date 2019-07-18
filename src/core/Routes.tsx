import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { BaseLayout } from './layout/BaseLayout';
import { OrdersPage } from 'src/orders/OrdersPage';
import { OrderPage } from 'src/orders/OrderPage';

export const Routes = () => (
  <BaseLayout>
    <Switch>
      <Route exact path="/" component={OrdersPage} />
      <Route exact path="/orders" component={OrdersPage} />
      <Route exact path="/orders/:id" component={OrderPage} />

      <Redirect to="/" />
    </Switch>
  </BaseLayout>
);
