import React from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  BoxProducts,
  Products,
  BoxImage,
  BoxDescriptionProduct,
  BoxPrice,
  BoxSize,
} from './styles';

export default function Product() {
  const product = useSelector((state) => state.product);
  console.log(product);
  return (
    <Container>
      <BoxProducts>
        <Products>
          <BoxImage>
            <img src={product.image} alt="" className={product.name} />
          </BoxImage>
          <BoxDescriptionProduct>
            <strong className="product__description--title">
              {product.name}
            </strong>
            <BoxPrice>
              <span className="product__description--price">
                {product.actual_price}
              </span>
              <span className="product__description--parcel">
                em até {product.installments}
              </span>
            </BoxPrice>
            <span className="product__description--choice">
              Escolha o tamanho
            </span>
            <BoxSize>
              <button
                type="button"
                className="product__description--button-size"
              >
                P
              </button>
              <button
                type="button"
                className="product__description--button-size"
              >
                M
              </button>
              <button
                type="button"
                className="product__description--button-size"
              >
                G
              </button>
            </BoxSize>
            <button type="button" className="product__description--button-add">
              Adicionar à Sacola
            </button>
          </BoxDescriptionProduct>
        </Products>
      </BoxProducts>
    </Container>
  );
}
