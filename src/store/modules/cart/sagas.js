import { select, put, call, all, takeLatest } from 'redux-saga/effects';

import api from '../../../service/api';

import { addCartSuccess, updateAmountSuccess } from './actions';

function* addCart({ style }) {
  const productExists = yield select((state) =>
    state.cart.find((product) => product.style === style)
  );

  const amountValue = productExists ? productExists.amount : 0;
  const amount = amountValue + 1;

  if (productExists) {
    yield put(updateAmountSuccess(style, amount));
  } else {
    const response = yield call(api.get);
    const productData = {
      ...response.data,
      amount: 1,
    };
    yield put(addCartSuccess(productData));
  }
}

function* updateAmount({ style, amount }) {
  if (amount === 1) {
    return; //eslint-disable-line
  }
  yield put(updateAmountSuccess(style, amount));
}

export default all([
  takeLatest('cart>>ADD_CART_RESQUEST', addCart),
  takeLatest('cart>>UPDATE_AMOUNT_REQUEST', updateAmount),
]);
