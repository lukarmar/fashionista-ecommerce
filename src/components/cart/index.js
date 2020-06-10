import React from 'react';
import {FaArrowLeft} from 'react-icons/fa'

import { Container } from './styles';

export default function Cart() {
  return (
    <Container>
      <BoxCart>
        <Header>
          <FaArrowLeft size={22} />
          <span className="cart__length">Sacola (0)</span>
        </Header>
        <BodyCart>
          <ProductCart>
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
          </ProductCart>
        </BodyCart>
      </BoxCart>
    </Container>
  );
}


