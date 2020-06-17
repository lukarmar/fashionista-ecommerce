import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Products from '../../components/products';
import SideBar from '../../components/sideBar';
import Loading from '../../components/loading';
import api from '../../service/api';

import { Container, BoxProducts, ProductList } from './syles';

export default function Catalog({
  setVisibleCart,
  visibleCart,
  visibleSearch,
  setVisibleSearch,
  setNumberScrool,
}) {
  const [products, setProducts] = useState([]);
  const { path } = useRouteMatch();

  useEffect(() => {
    api.get().then((response) => setProducts(response.data));
  }, []);

  window.addEventListener('scroll', () => {
    if (path === '/products/:id') {
      setNumberScrool(0);
      return;
    }
    setNumberScrool(window.scrollY);
  });

  return (
    <Container>
      <SideBar
        setVisibleCart={setVisibleCart}
        setVisibleSearch={setVisibleSearch}
        visibleCart={visibleCart}
        visibleSearch={visibleSearch}
      />
      {products.length === 0 ? (
        <Loading />
      ) : (
        <BoxProducts>
          <ProductList>
            {products.map((itemProduct) => (
              <Products products={itemProduct} key={itemProduct.code_color} />
            ))}
          </ProductList>
        </BoxProducts>
      )}
    </Container>
  );
}

Catalog.propTypes = {
  setVisibleCart: PropTypes.func.isRequired,
  visibleCart: PropTypes.bool.isRequired,
  setVisibleSearch: PropTypes.func.isRequired,
  visibleSearch: PropTypes.bool.isRequired,
  setNumberScrool: PropTypes.func.isRequired,
};
