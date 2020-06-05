import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../service/api';

import { getProductSuccess } from './actions';

function* getProduct({ style }) {
  const response = yield call(api.get);
  const product = response.data.find(
    (productData) => productData.style === style
  );

  yield put(getProductSuccess(product));
}

export default all([takeLatest('product>>GET_PRODUCT_RESQUEST', getProduct)]);
