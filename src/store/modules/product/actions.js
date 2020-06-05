export function getProductRequest(style) {
  return {
    type: 'product>>GET_PRODUCT_RESQUEST',
    style,
  };
}

export function getProductSuccess(product) {
  return {
    type: 'product>>GET_PRODUCT_SUCCESS',
    product,
  };
}
