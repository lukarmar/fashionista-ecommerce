import React from 'react';
import { FaArrowLeft, FaMinus, FaPlus } from 'react-icons/fa';
import Ink from 'react-ink';
import PropType from 'prop-types';

import {
  Container,
  CartContainer,
  DescriptioCart,
  Header,
  ProductCart,
  ProductCartItem,
  BoxImage,
  BoxDescriptionProduct,
  BoxInformationProduct,
  BoxAmount,
  BoxPrice,
  Footer,
} from './styles';

export default function Cart({ setVisibleCart, visibleCart }) {
  return (
    <Container>
      <CartContainer visibleCart={visibleCart}>
        <Header>
          <button
            type="button"
            className="cart__header--button"
            onClick={() => setVisibleCart(false)}
          >
            <FaArrowLeft size={22} />
            <Ink />
          </button>
          <span className="cart__length">Sacola (0)</span>
        </Header>
        <ProductCart>
          <ProductCartItem>
            <DescriptioCart>
              <BoxImage>
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611"
                  alt="produto"
                  className="product__image"
                />
              </BoxImage>
              <BoxDescriptionProduct>
                <BoxInformationProduct>
                  <strong className="product__description--title">
                    BATA DECOTE FLUID
                  </strong>
                  <span className="product__description--size">Tam.: GG</span>
                  <BoxAmount>
                    <button type="button" className="boxAmount__button">
                      <FaMinus size={12} />
                      <Ink />
                    </button>
                    <span className="boxAmount__number-amount">1</span>
                    <button type="button" className="boxAmount__button">
                      <FaPlus size={12} />
                      <Ink />
                    </button>
                  </BoxAmount>
                </BoxInformationProduct>
                <BoxPrice>
                  <strong className="product__description--price">
                    R$ 149,90
                  </strong>
                  <span className="product__description--parcel">
                    3x R$ 49,97
                  </span>
                </BoxPrice>
              </BoxDescriptionProduct>
            </DescriptioCart>
            <button
              type="button"
              className="product__description--button-remove"
            >
              Remover item
              <Ink />
            </button>
          </ProductCartItem>
        </ProductCart>

        <Footer>
          <strong>Subtotal - R$ 149,90</strong>
        </Footer>
      </CartContainer>
    </Container>
  );
}

Cart.propTypes = {
  setVisibleCart: PropType.func.isRequired,
  visibleCart: PropType.bool.isRequired,
};
