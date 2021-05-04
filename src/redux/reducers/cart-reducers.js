
import {ADD_TO_CART, ADJUST_Qty, REMOVE_FROM_CART} from '../types/shop-types';

const initialState = []

const cartReducer =  (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_TO_CART:
      const item = state.find((prod) => prod.id === payload.id);
      if (item) {
        item.qty += 1;
        return state;
      } else {
        // no item
        return [...state, {...payload, qty: 1}]
      }
    case REMOVE_FROM_CART:
      return  state.filter((item) => item.id !== payload)
    case ADJUST_Qty:
      const quantity = state.find((itemQty) => itemQty.id === payload.id);
      quantity.qty += 1;
      return state;
    default:
      return state
  }
}

export default cartReducer;
