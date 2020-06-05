import produce from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'cart>>ADD_CART_SUCCESS':
      return produce(state, (draft) => {
        const { product } = action;
        draft.push(product);
      });
    case 'cart>>UPDATE_AMOUNT_SUCCESS':
      return produce(state, (draft) => {
        const indexProduct = draft.findIndex((p) => p.style === action.style);
        if (indexProduct >= 0) {
          draft[indexProduct].amount = Number(action.amount);
        }
      });
    case 'cart>>REMOVE_ITEM':
      return produce(state, (draft) => {
        const indexProduct = draft.findIndex((p) => p.style === action.style);
        if (indexProduct >= 0) {
          draft.splice(indexProduct, 1);
        }
      });
    default:
      return state;
  }
}
