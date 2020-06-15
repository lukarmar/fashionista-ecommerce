import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

import Catalog from './pages/catalog';
import Product from './pages/product';

export default function Routes({
  setVisibleCart,
  visibleCart,
  visibleSearch,
  setVisibleSearch,
}) {
  return (
    <Switch>
      <Route path="/" exact>
        <Catalog
          visibleCart={visibleCart}
          setVisibleCart={setVisibleCart}
          visibleSearch={visibleSearch}
          setVisibleSearch={setVisibleSearch}
        />
      </Route>
      <Route path="/products/:id">
        <Product
          visibleCart={visibleCart}
          setVisibleCart={setVisibleCart}
          visibleSearch={visibleSearch}
          setVisibleSearch={setVisibleSearch}
        />
      </Route>
    </Switch>
  );
}

Routes.propTypes = {
  setVisibleCart: PropTypes.func.isRequired,
  visibleCart: PropTypes.bool.isRequired,
  visibleSearch: PropTypes.bool.isRequired,
  setVisibleSearch: PropTypes.func.isRequired,
};
