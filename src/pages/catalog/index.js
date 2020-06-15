import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { deletePreviusState } from '../../store/modules/product/actions';

import Cart from '../../components/cart';
import Search from '../../components/seach';
import api from '../../service/api';

import {
  Container,
  ShadowScreen,
  BoxProducts,
  Products,
  BoxImage,
  DescriptionProduct,
} from './syles';

export default function Catalog({
  setVisibleCart,
  visibleCart,
  visibleSearch,
  setVisibleSearch,
}) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get().then((response) => setProducts(response.data));
  }, []);

  return (
    <Container>
      {(visibleCart || visibleSearch) && <ShadowScreen />}
      <CSSTransition
        in={visibleCart}
        timeout={400}
        classNames="visible"
        unmountOnExit
      >
        <Cart setVisibleCart={setVisibleCart} visibleCart={visibleCart} />
      </CSSTransition>
      <CSSTransition
        in={visibleSearch}
        timeout={400}
        classNames="visible"
        unmountOnExit
      >
        <Search
          visibleSearch={visibleSearch}
          setVisibleSearch={setVisibleSearch}
        />
      </CSSTransition>

      <BoxProducts>
        <Products>
          {products.map((product) => (
            <li className="product__list" key={product.code_color}>
              <Link
                to={`/products/${product.style}`}
                onClick={() => {
                  dispatch(deletePreviusState());
                }}
              >
                <BoxImage>
                  {product.discount_percentage && (
                    <span className="product__discount_percentage">
                      {product.discount_percentage}
                    </span>
                  )}
                  <img
                    src={
                      !product.image
                        ? 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
                        : product.image
                    }
                    alt={product.name}
                    className="product__item--image"
                  />
                </BoxImage>
                <DescriptionProduct>
                  <strong className="product__item--name">
                    {product.name}
                  </strong>
                  <div className="product__item--price">
                    {product.regular_price !== product.actual_price && (
                      <span className="product__item___price--regular">
                        {product.actual_price}
                      </span>
                    )}
                    <span className="product__item___price--actual">
                      {product.actual_price}
                    </span>
                  </div>
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
  setVisibleCart: PropTypes.func.isRequired,
  visibleCart: PropTypes.bool.isRequired,
  setVisibleSearch: PropTypes.func.isRequired,
  visibleSearch: PropTypes.bool.isRequired,
};
