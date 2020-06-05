import produce from 'immer';

const INITIAL_STATE = {};

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'product>>GET_PRODUCT_SUCCESS':
      return produce(state, (draft) => {
        draft = {};
        draft = action.product;
      });
    default:
      return state;
  }
}
