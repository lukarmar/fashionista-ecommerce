import produce from 'immer';

import { searchProducts } from '../../../util/searchProducts';

const INITIAL_STATE = {
  baseData: [],
  searchData: [],
  search: '',
};

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'product>>GET_PRODUCT_SUCCESS':
      return produce(state, (draft) => {
        draft.baseData = action.products;
      });

    case 'product>>GET_SEARCH_SUCCESS':
      return produce(state, (draft) => {
        const productFound = searchProducts(
          action.search,
          draft.baseData,
          draft.searchData
        );
        draft.searchData = productFound;
        draft.search = action.search;
      });

    case 'product>>DELETE_STATE_SEARCH':
      return produce(state, (draft) => {
        while (draft.searchData.length) {
          draft.searchData.pop();
        }
      });
    default:
      return state;
  }
}
