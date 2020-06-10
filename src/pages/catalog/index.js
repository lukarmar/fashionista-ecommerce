import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import api from '../../service/api';
import { getProductRequest } from '../../store/modules/product/actions';

import {
  Container,
  BoxProducts,
  Products,
  BoxImage,
  DescriptionProduct,
} from './syles';

export default function Catalog({ setProduct }) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get().then((response) => setProducts(response.data));
  }, []);

  // function requestProduct(style) {
  //   dispatch(addCartRequest(style));
  // }

  function getProduct(style) {
    dispatch(getProductRequest(style));
  }

  return (
    <Container>
      <BoxProducts>
        <Products>
          {products.map((product) => (
            <li className="product__list" key={product.code_color}>
              <Link
                to={`/products/${product.name}`}
                onClick={() => {
                  getProduct(product.style);
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
};
