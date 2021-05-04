import React from 'react';
// import styles from '../Products/Product/Product.module.css'
import Food from "./Food";
import {FOODS} from '../../mocks/mock-data';
// import  {connect} from 'react-redux';

const OrderFood = () => {
    // console.log('foods', foods);
    return (
        <div className="pt-3">
            {
                FOODS.map((food) => (
                    <div key={food.foodId}>
                        <Food foodData={food} />
                    </div>
                ))
            }
        </div>
    );
};


export default OrderFood;
