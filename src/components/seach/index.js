import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Ink from 'react-ink';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { searchProducts } from '../../util/searchProducts';
import { getProductRequest } from '../../store/modules/product/actions';

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

export default function Search({
  visibleSearch,
  setVisibleSearch,
  setProduct,
}) {
  const products = useSelector((state) => state.product);
  const [captureValue, setCaptureValue] = useState('');
  const [productData, setProductData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductRequest());
  }, []); //eslint-disable-line

  useEffect(() => {
    if (captureValue === '') {
      setProductData([]);
      return;
    }
    setProductData(searchProducts(captureValue, products[0]));
  }, [captureValue, products]);

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
            name="search"
            className="boxInputSearch__input"
            placeholder="Buscar por produto..."
            value={captureValue}
            onChange={(e) => setCaptureValue(e.target.value)}
            autoComplete={false}
            autoCorrect={false}
          />
        </BoxInputSearch>
        <ProductSearch>
          {productData.map((data) => (
            <Link
              to={`/products/${data.name}`}
              onClick={() => {
                setVisibleSearch(false);
                setProduct(data);
              }}
            >
              <ProductSearchItem>
                <DescriptioSearch>
                  <BoxImage>
                    <img
                      src={data.image}
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
  setProduct: PropType.func.isRequired,
  visibleSearch: PropType.bool.isRequired,
};
