import *  as actionTypes from './shopping-types';

const INITIAL_STATE = {
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
}

const foodReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
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
        default: return state
    }
}

export default foodReducer;
