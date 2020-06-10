import React from 'react';
import PropTypes from 'prop-types';

import DataProduct from '../../components/dataProduct';
import Cart from '../../components/cart'

import { Container, BoxProducts } from './styles';

export default function Product({ product }) {
  return (
    <Container>
      <Cart />
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
  product: PropTypes.object
};

Product.defaultProps = {
  product: null,
};
