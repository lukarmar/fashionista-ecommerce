import styled from 'styled-components';

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

export const ProductList = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 98px;
  flex-wrap: wrap;
  justify-content: space-around;

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
