import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: row-reverse;
  z-index: 999;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 28%;
  height: 100%;
  background: #f9f9f9;
  box-shadow: -1px 0px 2px 0px rgba(0, 0, 0, 1);
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1045px) {
    width: 100%;
  }
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

  .search__header--button {
    position: relative;
    background: transparent;
    padding: 1px;
    border: none;
    border-radius: 50%;
  }

  .search__header--title {
    flex: 1;
    font-size: 0.9rem;
    font-weight: 700;
    margin-left: 18px;
  }

  @media (max-width: 1045px) {
    .search__header--title {
      margin-left: 40%;
    }
  }
`;

export const BoxInputSearch = styled.div`
  background: #f6f6f6;
  box-shadow: 0 0.2rem 2rem 0 rgba(0, 0, 0, 0.1);
  color: #fff;
  display: inline-block;
  padding: 0.8rem 1rem;
  margin-top: 54px;

  display: flex;
  justify-content: center;
  align-items: center;

  .boxInputSearch__input::placeholder {
    color: #a7a7a7;
    font-weight: bold;
  }

  .boxInputSearch__input {
    background: #fff;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
    color: #212529;
    font-size: 0.9rem;
    font-weight: 600;
    height: auto;
    outline: none;
    padding: 10px;
    width: 100%;
  }
`;

export const ProductSearch = styled.div`
  position: relative;
  padding: 48px 18px 0 18px;

  a {
    color: #000;
  }
`;

export const ProductSearchItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 10px;
`;

export const DescriptioSearch = styled.div`
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
