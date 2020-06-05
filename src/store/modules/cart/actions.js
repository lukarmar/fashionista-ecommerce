export function addCartRequest(style) {
  return {
    type: 'cart>>ADD_CART_RESQUEST',
    style,
  };
}

export function addCartSuccess(product) {
  return {
    type: 'cart>>ADD_CART_SUCCESS',
    product,
  };
}

export function updateAmountRequest(style, amount) {
  return {
    type: 'cart>>UPDATE_AMOUNT_REQUEST',
    style,
    amount,
  };
}

export function updateAmountSuccess(style, amount) {
  return {
    type: 'cart>>UPDATE_AMOUNT_SUCCESS',
    style,
    amount,
  };
}

export function removeProduct(style) {
  return {
    type: 'cart>>REMOVE_PRODUCT',
    style,
  };
}
