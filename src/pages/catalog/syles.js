import styled from 'styled-components';

export const ShadowScreen = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;

  z-index: 999;

  &::before {
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
  }

  @media (max-width: 1045px) {
    z-index: -1;
  }
`;

export const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const BoxProducts = styled.div`
  width: 100%;
  height: auto;
  max-width: 1247px;
  display: flex;
  padding: 16px;
`;

export const Products = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 98px;
  flex-wrap: wrap;

  justify-content: space-around;

  li {
    width: 24.7%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 991px) {
    li {
      width: 33%;
    }
  }

  @media (max-width: 760px) {
    li {
      width: 49%;
    }
  }

  @media (max-width: 460px) {
    li {
      width: 100%;
    }
  }
`;

export const BoxImage = styled.figure`
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;

  .product__discount_percentage {
    position: absolute;
    top: 0;
    right: 0;
    width: 12%;
    height: 5%;
    background: #212529;
    color: #fff;
    text-align: center;
    font-size: 0.7rem;
    z-index: 1;
  }

  .product__item--image {
    position: relative;
    width: 100%;
    height: auto;

    background: #fff;
  }
`;

export const DescriptionProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.9rem 0;

  .product__item--name {
    font-size: 0.8rem;
    color: #000;
    text-transform: uppercase;
  }

  .product__item--price {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;

    .product__item___price--actual {
      font-size: 0.9rem;
      color: #000;
    }

    .product__item___price--regular {
      font-size: 0.7rem;
      color: #a7a7a7;
      margin: 2px 7px 0 0;
      text-decoration: line-through;
    }
  }
`;
