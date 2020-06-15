export function addCartRequest(style, size, sku) {
  return {
    type: 'cart::ADD_CART_RESQUEST',
    style,
    size,
    sku,
  };
}

export function addCartSuccess(product) {
  return {
    type: 'cart::ADD_CART_SUCCESS',
    product,
  };
}

export function updateAmountRequest(amount, sku) {
  return {
    type: 'cart::UPDATE_AMOUNT_REQUEST',
    amount,
    sku,
  };
}

export function updateAmountSuccess(amount, sku) {
  return {
    type: 'cart::UPDATE_AMOUNT_SUCCESS',
    sku,
    amount,
  };
}

export function removeProduct(style) {
  return {
    type: 'cart::REMOVE_PRODUCT',
    style,
  };
}
