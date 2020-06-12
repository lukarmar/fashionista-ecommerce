import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import Cart from '../../components/cart';
import Search from '../../components/seach';
import api from '../../service/api';

import {
  Container,
  ShadowScrenn,
  BoxProducts,
  Products,
  BoxImage,
  DescriptionProduct,
} from './syles';

export default function Catalog({
  setProduct,
  setVisibleCart,
  visibleCart,
  visibleSearch,
  setVisibleSearch,
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get().then((response) => setProducts(response.data));
  }, []);

  return (
    <Container>
      {(visibleCart || visibleSearch) && <ShadowScrenn />}
      <CSSTransition
        in={visibleCart}
        timeout={300}
        classNames="visible"
        unmountOnExit
      >
        <Cart setVisibleCart={setVisibleCart} visibleCart={visibleCart} />
      </CSSTransition>
      <CSSTransition
        in={visibleSearch}
        timeout={300}
        classNames="visible"
        unmountOnExit
      >
        <Search
          setProduct={setProduct}
          visibleSearch={visibleSearch}
          setVisibleSearch={setVisibleSearch}
        />
      </CSSTransition>

      <BoxProducts>
        <Products>
          {products.map((product) => (
            <li className="product__list" key={product.code_color}>
              <Link
                to={`/products/${product.name}`}
                onClick={() => {
                  setProduct(product);
                }}
              >
                <BoxImage>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product__item--image"
                  />
                </BoxImage>
                <DescriptionProduct>
                  <strong className="product__item--name">
                    {product.name}
                  </strong>
                  <span className="product__item--price">
                    {product.actual_price}
                  </span>
                </DescriptionProduct>
              </Link>
            </li>
          ))}
        </Products>
      </BoxProducts>
    </Container>
  );
}

Catalog.propTypes = {
  setProduct: PropTypes.func.isRequired,
  setVisibleCart: PropTypes.func.isRequired,
  visibleCart: PropTypes.bool.isRequired,
  setVisibleSearch: PropTypes.func.isRequired,
  visibleSearch: PropTypes.bool.isRequired,
};
