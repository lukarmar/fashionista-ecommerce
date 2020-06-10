import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';

import {
  Products,
  BoxImage,
  BoxDescriptionProduct,
  BoxPrice,
  BoxSize,
} from './styles';

export default function DataProduct({ product }) {
  const [sizeSelect, setSizeSelect] = useState('')

  return (
    <Products>
      <BoxImage>
        <img
          src={product.image}
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
        <BoxSize>
          {product.sizes.map( dataSize  => (
            dataSize.available &&
              <button type="button" name={dataSize.size}
                className={`product__button-size ${sizeSelect === dataSize.sku  ?
                  'product__button-size--selected' : ''}`}
                onClick={()=>setSizeSelect(dataSize.sku)}
                >
                {dataSize.size}
                <Ink/>
              </button>
          ))}
        </BoxSize>
        <button type="button" className="product__description--button-add">
          Adicionar à Sacola
          <Ink/>
        </button>
      </BoxDescriptionProduct>
    </Products>
  );
}

DataProduct.propTypes = {
  product: PropTypes.object,
};

DataProduct.defaultProps = {
  product: null,
};
