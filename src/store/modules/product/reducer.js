import produce from 'immer';

const INITIAL_STATE = { data: null };

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'product>>GET_PRODUCT_SUCCESS':
      return produce(state, (draft) => {
        draft.data = action.product;
      });
    default:
      return state;
  }
}
