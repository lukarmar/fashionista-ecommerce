import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Catalog from './pages/catalog';
import Product from './pages/product';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Catalog} />
      <Route path="/product" exact component={Product} />
    </Switch>
  );
}
