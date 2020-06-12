import React from 'react';
import { FaArrowLeft, FaMinus, FaPlus } from 'react-icons/fa';
import Ink from 'react-ink';
import PropType from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  updateAmountRequest,
  removeProduct,
} from '../../store/modules/cart/actions';

import { converNumber } from '../../util/convertNumber';
import { currencyFormat } from '../../util/currencyFormat';

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
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);
  const amountProducts = useSelector((state) =>
    state.cart.reduce((sumTotal, item) => {
      return sumTotal + item.amount;
    }, 0)
  );
  const subTotal = useSelector((state) =>
    currencyFormat(
      state.cart.reduce((sumTotal, item) => {
        return sumTotal + converNumber(item.actual_price) * item.amount;
      }, 0)
    )
  );

  console.tron.log(products);

  function increment(product) {
    dispatch(updateAmountRequest(product.sku, product.amount + 1));
  }
  function decrement(product) {
    dispatch(updateAmountRequest(product.sku, product.amount - 1));
  }

  function deleteProduct(style) {
    dispatch(removeProduct(style));
  }

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
          <span className="cart__length">Sacola ({amountProducts})</span>
        </Header>
        <ProductCart>
          {products.map((product) => (
            <ProductCartItem>
              <DescriptioCart>
                <BoxImage>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product__image"
                  />
                </BoxImage>
                <BoxDescriptionProduct>
                  <BoxInformationProduct>
                    <strong className="product__description--title">
                      {product.name}
                    </strong>
                    <span className="product__description--size">
                      Tam.: {product.size}
                    </span>
                    <BoxAmount>
                      <button
                        type="button"
                        className="boxAmount__button"
                        onClick={() => decrement(product)}
                      >
                        <FaMinus size={12} />
                        <Ink />
                      </button>
                      <span className="boxAmount__number-amount">
                        {product.amount}
                      </span>
                      <button
                        type="button"
                        className="boxAmount__button"
                        onClick={() => increment(product)}
                      >
                        <FaPlus size={12} />
                        <Ink />
                      </button>
                    </BoxAmount>
                  </BoxInformationProduct>
                  <BoxPrice>
                    <strong className="product__description--price">
                      {product.actual_price}
                    </strong>
                    <span className="product__description--parcel">
                      {product.installments}
                    </span>
                  </BoxPrice>
                </BoxDescriptionProduct>
              </DescriptioCart>
              <button
                type="button"
                className="product__description--button-remove"
                onClick={() => deleteProduct(product.style)}
              >
                Remover item
                <Ink />
              </button>
            </ProductCartItem>
          ))}
        </ProductCart>

        <Footer>
          <strong>Subtotal - {subTotal}</strong>
        </Footer>
      </CartContainer>
    </Container>
  );
}

Cart.propTypes = {
  setVisibleCart: PropType.func.isRequired,
  visibleCart: PropType.bool.isRequired,
};
