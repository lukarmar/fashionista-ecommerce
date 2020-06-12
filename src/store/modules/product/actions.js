export function getProductRequest() {
  return {
    type: 'product>>GET_PRODUCT_RESQUEST',
  };
}

export function getProductSuccess(products) {
  return {
    type: 'product>>GET_PRODUCT_SUCCESS',
    products,
  };
}

export function getSearchProductSuccess(search) {
  return {
    type: 'product>>GET_SEARCH_SUCCESS',
    search,
  };
}

export function deleteStateSeach() {
  return {
    type: 'product>>DELETE_STATE_SEARCH',
  };
}
