import React, { useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import Catalog from './pages/catalog';
import Product from './pages/product';

export default function Routes({
  setVisibleCart,
  visibleCart,
  visibleSearch,
  setVisibleSearch,
}) {
  const [product, setProduct] = useState(null);

  return (
    <Switch>
      <Route path="/" exact>
        <Catalog
          setProduct={setProduct}
          visibleCart={visibleCart}
          setVisibleCart={setVisibleCart}
          visibleSearch={visibleSearch}
          setVisibleSearch={setVisibleSearch}
        />
      </Route>
      <Route path="/products">
        <Product
          setProduct={setProduct}
          product={product}
          visibleCart={visibleCart}
          setVisibleCart={setVisibleCart}
          visibleSearch={visibleSearch}
          setVisibleSearch={setVisibleSearch}
        />
      </Route>
    </Switch>
  );
}
