import { select, put, call, all, takeLatest } from 'redux-saga/effects';

import api from '../../../service/api';

import { addCartSuccess, updateAmountSuccess } from './actions';

function* addCart({ style, size, sku }) {
  const productExists = yield select((state) =>
    state.cart.find((product) => product.sku === sku)
  );

  const amountValue = productExists ? productExists.amount : 0;
  const amount = amountValue + 1;

  if (productExists) {
    yield put(updateAmountSuccess(amount, sku));
  } else {
    const response = yield call(api.get);
    const product = response.data.find((data) => data.style === style);
    const productData = {
      ...product,
      size,
      sku,
      amount: 1,
    };
    yield put(addCartSuccess(productData));
  }
}

function* updateAmount({ amount, sku }) {
  if (amount === 0) {
    return; //eslint-disable-line
  }
  yield put(updateAmountSuccess(amount, sku));
}

export default all([
  takeLatest('cart::ADD_CART_RESQUEST', addCart),
  takeLatest('cart::UPDATE_AMOUNT_REQUEST', updateAmount),
]);
