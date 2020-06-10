import React, { useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import Catalog from './pages/catalog';
import Product from './pages/product';

export default function Routes() {
  const [product, setProduct] = useState(null);
  return (
    <Switch>
      <Route path="/" exact>
        <Catalog setProduct={setProduct} />
      </Route>
      <Route path="/products">
        <Product product={product} />
      </Route>
    </Switch>
  );
}
