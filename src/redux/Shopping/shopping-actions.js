import  * as actionTypes from './shopping-types';

export const addFoodToCart = (itemId) => {
  console.log(itemId);
  return {
    type: actionTypes.ADD_FOOD_TO_CART,
    payload: {
      id: itemId
    }
  }
}
export const addToCart = (itemId) => {
  console.log(itemId);
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId
    }
  }
}

export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId
    }
  }
}

export const adjustQty = (itemId, value) => {
  return {
    type: actionTypes.ADJUST_Qty,
    payload: {
      id: itemId,
      qty: value
    }
  }
}

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item
  }
}
