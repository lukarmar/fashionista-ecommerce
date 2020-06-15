import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../service/api';

import { getProductSuccess, getSingleProductSuccess } from './actions';

function* getProduct() {
  const response = yield call(api.get);

  yield put(getProductSuccess(response.data));
}

function* getSingleProduct({ style }) {
  const response = yield call(api.get);

  const sigleProduct = yield response.data.find(
    (product) => product.style === style
  );

  yield put(getSingleProductSuccess(sigleProduct));
}

export default all([
  takeLatest('product::GET_PRODUCT_RESQUEST', getProduct),
  takeLatest('product::GET_SINGLE_PRODUCT_REQUEST', getSingleProduct),
]);
