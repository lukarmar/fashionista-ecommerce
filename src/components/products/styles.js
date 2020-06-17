import styled from 'styled-components';

export const ProductItem = styled.li`
  width: 24.7%;
  height: auto;
  display: flex;
  flex-direction: column;
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
