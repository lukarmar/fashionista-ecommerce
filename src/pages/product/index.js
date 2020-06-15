import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';

import DataProduct from '../../components/dataProduct';
import Cart from '../../components/cart';
import Search from '../../components/seach';
import Loading from '../../components/loading';

import { getSingleProductRequest } from '../../store/modules/product/actions';

import { Container, BoxProducts, ShadowScreen } from './styles';

export default function Product({
  setVisibleCart,
  visibleCart,
  visibleSearch,
  setVisibleSearch,
}) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product.singleProduct);

  useEffect(() => {
    dispatch(getSingleProductRequest(id));
  }, []); // eslint-disable-line

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

      {!product ? (
        <Loading />
      ) : (
        <BoxProducts>
          <DataProduct product={product} />
        </BoxProducts>
      )}
    </Container>
  );
}

Product.propTypes = {
  setVisibleCart: PropTypes.func.isRequired,
  visibleCart: PropTypes.bool.isRequired,
  setVisibleSearch: PropTypes.func.isRequired,
  visibleSearch: PropTypes.bool.isRequired,
};
