import  * as actionTypes from './shopping-types'

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: 'This is the best southern Bed',
      description: 'THis is the bed oooooooo nice one',
      price: 20.00,
      image: 'images/bed1.jpg'
    },
    {
      id: 2,
      title: 'This is the best southern Bed',
      description: 'THis is the bed oooooooo nice one',
      price: 40.00,
      image: 'images/bed2.jpg'
    },
    {
      id: 3,
      title: 'This is the best southern Bed',
      description: 'THis is the bed oooooooo nice one',
      price: 60.00,
      image: 'images/bed3.jpg'
    }
  ], // {id, title, descr, price, img}
  foods: [
    {
      foodId: 1,
      foodName: 'Fried Rice',
      price: 900,
      image: 'images/book-img.jpg'
    },
    {
      foodId: 2,
      foodName: 'Amala Spcies',
      price: 300,
      image: 'images/garden-img.jpg'
    },
    {
      foodId: 3,
      foodName: 'Tea',
      price: 300,
      image: 'images/bed3.jpg'
    }
  ],
  cart: [], // {id, title, descr, price, img, qty}
  currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Get the items data from the products array
       const item = state.products.find((prod) => prod.id === action.payload.id);

        // check if item is in cart already
       const inCart = state.cart.find((item) =>
            item.id === action.payload.id);
      return {
        ...state,
        cart: inCart ?
            state.cart.map((item) => item.id === action.payload.id
            ? {...item, qty: item.qty + 1} : item
            )
            : [...state.cart, {...item, qty: 1}] // if check is false
      }
    case actionTypes.ADD_FOOD_TO_CART:
      const myFood = state.foods.find((food) => food.foodId === action.payload.id);

      // check if item is in cart already
      const availableInCart = state.cart.find((item) =>
          item.foodId === +action.payload.id);
      return {
        ...state,
        cart: availableInCart ?
            state.cart.map((item) => item.foodId === action.payload.id
                ? {...myFood, qty: +item.qty + 1} : myFood
            )
            : [...state.cart, {...myFood, qty: 1}] // if check is false
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      }
    case actionTypes.ADJUST_Qty:
      return {
        ...state,
        cart: state.cart.map((item) =>
        item.id === action.payload.id
            ? {...item, qty: +action.payload.qty}
            : item
        )
      }
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload
      }
    default: return state
  }
}

export default shopReducer;
