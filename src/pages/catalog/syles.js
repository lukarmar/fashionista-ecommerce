import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BoxProducts = styled.div`
  width: 100%;
  max-width: 1247px;
  display: flex;
  padding: 16px;
`;

export const Products = styled.ul`
  width: 100%;
  display: flex;
  margin-top: 98px;
  /* justify-content: baseline; */
  flex-wrap: wrap;

  li {
    width: 24.7%;
    display: flex;
    flex-direction: column;

    margin-right: 4px;

    &:nth-child(4n) {
      margin: 0;
    }
  }
`;

export const BoxImage = styled.figure`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  .product__item--image {
    width: 100%;
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
    font-size: 0.9rem;
    color: #000;
    margin-top: 5px;
  }
`;
