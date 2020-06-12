import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import DataProduct from '../../components/dataProduct';
import Cart from '../../components/cart';
import Search from '../../components/seach';

import { Container, BoxProducts, ShadowScrenn } from './styles';

export default function Product({
  setProduct,
  product,
  setVisibleCart,
  visibleCart,
  visibleSearch,
  setVisibleSearch,
}) {
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

      {!product ? (
        'Aguarde'
      ) : (
        <BoxProducts>
          <DataProduct product={product} />
        </BoxProducts>
      )}
    </Container>
  );
}

Product.propTypes = {
  setProduct: PropTypes.func.isRequired,
  product: PropTypes.object, //eslint-disable-line
  setVisibleCart: PropTypes.func.isRequired,
  visibleCart: PropTypes.bool.isRequired,
  setVisibleSearch: PropTypes.func.isRequired,
  visibleSearch: PropTypes.bool.isRequired,
};

Product.defaultProps = {
  product: null,
};
