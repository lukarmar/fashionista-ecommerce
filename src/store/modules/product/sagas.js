import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../service/api';

import { getProductSuccess } from './actions';

function* getProduct() {
  const response = yield call(api.get);

  yield put(getProductSuccess(response.data));
}

export default all([takeLatest('product>>GET_PRODUCT_RESQUEST', getProduct)]);
