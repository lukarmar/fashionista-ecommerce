import produce from 'immer';

import { searchProducts } from '../../../util/searchProducts';

const INITIAL_STATE = {
  baseData: [],
  searchData: [],
  singleProduct: { product: null },
};

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'product::GET_PRODUCT_SUCCESS':
      return produce(state, (draft) => {
        draft.baseData = action.products;
      });

    case 'product::GET_SEARCH_SUCCESS':
      return produce(state, (draft) => {
        const productFound = searchProducts(
          action.search,
          draft.baseData,
          draft.searchData
        );
        draft.searchData = productFound;
        draft.search = action.search;
      });

    case 'product::DELETE_STATE_SEARCH':
      return produce(state, (draft) => {
        while (draft.searchData.length) {
          draft.searchData.pop();
        }
      });

    case 'product::GET_SINGLE_PRODUCT_SUCCESS':
      return produce(state, (draft) => {
        draft.singleProduct.product = action.product;
      });

    case 'product::DELETE_PREVIUS_STATE':
      return produce(state, (draft) => {
        draft.singleProduct.product = null;
      });
    default:
      return state;
  }
}
