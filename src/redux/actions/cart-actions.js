import {ADD_TO_CART, ADJUST_Qty, REMOVE_FROM_CART} from '../types/shop-types';


export const handleAddToCart = (item) => async dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: item
  });
}

export const handleRemoveFromCart = (itemId) => async dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: itemId

  });
}

export const handleAdjustQty = (itemId, value) => async dispatch => {
  dispatch({
    type: ADJUST_Qty,
    payload: {
      id: itemId,
      qty: value
    }

  });
}
