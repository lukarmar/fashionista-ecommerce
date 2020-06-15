import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Ink from 'react-ink';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  getSearchProductSuccess,
  getProductRequest,
  deleteStateSeach,
  getSingleProductRequest,
  deletePreviusState,
} from '../../store/modules/product/actions';

import {
  Container,
  SearchContainer,
  DescriptioSearch,
  Header,
  BoxInputSearch,
  ProductSearch,
  ProductSearchItem,
  BoxImage,
  BoxDescriptionProduct,
  BoxInformationProduct,
  BoxPrice,
} from './styles';

export default function Search({ visibleSearch, setVisibleSearch }) {
  const products = useSelector((state) => state.product);
  const [captureValue, setCaptureValue] = useState('');
  const [keyCode, setKeyCode] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductRequest());
  }, []); //eslint-disable-line

  useEffect(() => {
    if (keyCode === 8 && captureValue === '') {
      dispatch(deleteStateSeach());
      return;
    }
    dispatch(getSearchProductSuccess(captureValue));
  }, [captureValue]); //eslint-disable-line

  async function handleStateAndVisible(style) {
    await dispatch(getSingleProductRequest(style));
    await dispatch(deletePreviusState());
    setVisibleSearch(false);
  }

  return (
    <Container>
      <SearchContainer visibleCart={visibleSearch}>
        <Header>
          <button
            type="button"
            className="search__header--button"
            onClick={() => setVisibleSearch(false)}
          >
            <FaArrowLeft size={22} />
            <Ink />
          </button>
          <span className="search__header--title">Buscar Produtos</span>
        </Header>
        <BoxInputSearch>
          <input
            onKeyDown={(e) => setKeyCode(e.keyCode)}
            name="search"
            className="boxInputSearch__input"
            placeholder="Buscar por produto..."
            value={captureValue}
            onChange={(e) => {
              setCaptureValue(e.target.value);
            }}
            autoComplete="off"
          />
        </BoxInputSearch>
        <ProductSearch>
          {products.searchData.map((data) => (
            <Link
              to={`/products/${data.style}`}
              onClick={async () => {
                handleStateAndVisible(data.style);
              }}
            >
              <ProductSearchItem>
                <DescriptioSearch>
                  <BoxImage>
                    <img
                      src={
                        !data.image
                          ? 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
                          : data.image
                      }
                      alt={data.name}
                      className="product__image"
                    />
                  </BoxImage>
                  <BoxDescriptionProduct>
                    <BoxInformationProduct>
                      <strong className="product__description--title">
                        {data.name}
                      </strong>
                    </BoxInformationProduct>
                    <BoxPrice>
                      <strong className="product__description--price">
                        {data.actual_price}
                      </strong>
                      <span className="product__description--parcel">
                        {data.installments}
                      </span>
                    </BoxPrice>
                  </BoxDescriptionProduct>
                </DescriptioSearch>
              </ProductSearchItem>
            </Link>
          ))}
        </ProductSearch>
      </SearchContainer>
    </Container>
  );
}

Search.propTypes = {
  setVisibleSearch: PropType.func.isRequired,
  visibleSearch: PropType.bool.isRequired,
};
