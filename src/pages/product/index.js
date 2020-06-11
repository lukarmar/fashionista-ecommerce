import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import DataProduct from '../../components/dataProduct';
import Cart from '../../components/cart';

import { Container, BoxProducts, ShadowScrenn } from './styles';

export default function Product({ product, setVisibleCart, visibleCart }) {
  return (
    <Container>
      {visibleCart && <ShadowScrenn />}
      <CSSTransition
        in={visibleCart}
        timeout={300}
        classNames="visible"
        unmountOnExit
      >
        <Cart setVisibleCart={setVisibleCart} visibleCart={visibleCart} />
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
  product: PropTypes.object, //eslint-disable-line
  setVisibleCart: PropTypes.func.isRequired,
  visibleCart: PropTypes.bool.isRequired,
};

Product.defaultProps = {
  product: null,
};
