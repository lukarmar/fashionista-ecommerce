import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SideBar from '../../components/sideBar';
import DataProduct from '../../components/dataProduct';
import Loading from '../../components/loading';

import { getSingleProductRequest } from '../../store/modules/product/actions';

import { Container, BoxProducts } from './styles';

export default function Product({
  setVisibleCart,
  visibleCart,
  visibleSearch,
  setVisibleSearch,
  setNumberScrool,
}) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { path } = useRouteMatch();
  const { product } = useSelector((state) => state.product.singleProduct);

  useEffect(() => {
    dispatch(getSingleProductRequest(id));
  }, []); // eslint-disable-line

  window.addEventListener('scroll', () => {
    if (path === '/products/:id') {
      setNumberScrool(0);
    }
  });

  return (
    <Container>
      <SideBar
        setVisibleCart={setVisibleCart}
        setVisibleSearch={setVisibleSearch}
        visibleCart={visibleCart}
        visibleSearch={visibleSearch}
      />

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
  setNumberScrool: PropTypes.func.isRequired,
};
