import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: row-reverse;
  z-index: 999;

  /* &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 1;
    left: 0;
    top: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8323704481792717) 100%,
      rgba(0, 0, 0, 1) 100%,
      rgba(0, 48, 59, 1) 100%,
      rgba(0, 86, 104, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    );
  } */
`;

export const CartContainer = styled.div`
  position: relative;
  width: 28%;
  height: 100%;
  background: #f9f9f9;
  box-shadow: -1px 0px 2px 0px rgba(0, 0, 0, 1);
  overflow-y: auto;
  display: flex;
`;

export const Header = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
  padding: 14.5px 18px;
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: 0px 2px 3px 0px rgba(48, 50, 50, 0.05);
  z-index: 21;

  .cart__header--button {
    position: relative;
    background: transparent;
    padding: 1px;
    border: none;
    border-radius: 50%;
  }
  .cart__length {
    flex: 1;
    font-size: 0.9rem;
    font-weight: 700;
    margin-left: 50px;
  }
`;

export const ProductCart = styled.div`
  position: relative;
  padding: 68px 18px 0 18px;
`;

export const ProductCartItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.08);

  .product__description--button-remove {
    position: relative;
    background: transparent;
    border: none;

    width: 25%;
    font-size: 0.8rem;
    color: #cf3838;
  }
`;

export const DescriptioCart = styled.div`
  display: flex;
`;
export const BoxImage = styled.div`
  position: relative;
  width: 25%;
  overflow: hidden;

  .product__image {
    width: 100%;
  }
`;

export const BoxDescriptionProduct = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  margin-left: 8px;
`;
export const BoxInformationProduct = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;

  .product__description--title {
    font-size: 0.7rem;
    letter-spacing: 0.5px;
  }

  .product__description--size {
    font-size: 0.7rem;
    color: #a7a7a7;
    margin: 8px 0;
    letter-spacing: 0.5px;
  }
`;
export const BoxAmount = styled.div`
  display: flex;
  align-items: center;

  .boxAmount__button {
    display: flex;
    position: relative;
    padding: 5px;
    justify-content: center;
    align-items: center;
    background: transparent;

    border: 1px #000 solid;
    transition: 0.5s ease;

    &:hover {
      color: #fff;
      background: #000;
    }
  }

  .boxAmount__number-amount {
    font-size: 1rem;
    margin: 0 15px;
  }
`;
export const BoxPrice = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .product__description--price {
    font-size: 0.9rem;
    text-align: right;
    margin-bottom: 7px;
    margin-top: -3px;
  }

  .product__description--parcel {
    font-size: 0.7rem;
    text-align: right;
    color: #a7a7a7;
    letter-spacing: 0.5px;
  }
`;
export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  background: #212529;
  padding: 16px 28px;
  width: 100%;
  box-shadow: 0 -0.2rem 2rem 0 rgba(0, 0, 0, 0.08);
  display: inline-block;
  z-index: 21;

  strong {
    font-size: 0.9rem;
    color: #fff;
  }
`;
