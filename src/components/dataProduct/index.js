import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';
import { useDispatch } from 'react-redux';

import { addCartRequest } from '../../store/modules/cart/actions';

import {
  Products,
  BoxImage,
  BoxDescriptionProduct,
  BoxPrice,
  BoxSize,
} from './styles';

export default function DataProduct({ product }) {
  const [sizeSelect, setSizeSelect] = useState('');
  const [size, setSize] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  function handleProduct(style, sizeProduct) {
    if (!size) {
      setError(true);
      return;
    }
    dispatch(addCartRequest(style, sizeProduct, sizeSelect));
  }

  return (
    <Products>
      <BoxImage>
        <img
          src={
            !product.image
              ? 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
              : product.image
          }
          alt={product.name}
          className="product__image"
        />
      </BoxImage>
      <BoxDescriptionProduct>
        <strong className="product__description--title">{product.name}</strong>
        <BoxPrice>
          <span className="product__description--price">
            {product.actual_price}
          </span>
          <span className="product__description--parcel">
            em até preço {product.installments}
          </span>
        </BoxPrice>
        <span className="product__description--choice">Escolha o tamanho</span>
        {error && (
          <span className="product__description--error">
            É necessário escolher um tamanho
          </span>
        )}
        <BoxSize>
          {product.sizes.map(
            (dataSize) =>
              dataSize.available && (
                <button
                  type="button"
                  name={dataSize.size}
                  className={`product__button-size ${
                    sizeSelect === dataSize.sku
                      ? 'product__button-size--selected'
                      : ''
                  }`}
                  onClick={() => {
                    setSizeSelect(dataSize.sku);
                    setSize(dataSize.size);
                  }}
                >
                  {dataSize.size}
                  <Ink />
                </button>
              )
          )}
        </BoxSize>
        <button
          type="button"
          className="product__description--button-add"
          onClick={() => handleProduct(product.style, size)}
        >
          Adicionar à Sacola
          <Ink />
        </button>
      </BoxDescriptionProduct>
    </Products>
  );
}

DataProduct.propTypes = {
  product: PropTypes.object, //eslint-disable-line
};

DataProduct.defaultProps = {
  product: null,
};
