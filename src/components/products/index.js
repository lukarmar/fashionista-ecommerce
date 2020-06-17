import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deletePreviusState } from '../../store/modules/product/actions';

import { ProductItem, DescriptionProduct, BoxImage } from './styles';

export default function Products({ products }) {
  const dispatch = useDispatch();
  return (
    <ProductItem key={products.code_color}>
      <Link
        to={`/products/${products.style}`}
        onClick={() => {
          dispatch(deletePreviusState());
        }}
      >
        <BoxImage>
          {products.discount_percentage && (
            <span className="product__discount_percentage">
              {products.discount_percentage}
            </span>
          )}
          <img
            src={
              !products.image
                ? 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
                : products.image
            }
            alt={products.name}
            className="product__item--image"
          />
        </BoxImage>
        <DescriptionProduct>
          <strong className="product__item--name">{products.name}</strong>
          <div className="product__item--price">
            {products.regular_price !== products.actual_price && (
              <span className="product__item___price--regular">
                {products.actual_price}
              </span>
            )}
            <span className="product__item___price--actual">
              {products.actual_price}
            </span>
          </div>
        </DescriptionProduct>
      </Link>
    </ProductItem>
  );
}

Products.propTypes = {
  products: PropTypes.object.isRequired, //eslint-disable-line
};
