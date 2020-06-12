export function getProductRequest(product) {
  return {
    type: 'product>>GET_PRODUCT_RESQUEST',
    product,
  };
}

export function getProductSuccess(product) {
  return {
    type: 'product>>GET_PRODUCT_SUCCESS',
    product,
  };
}
