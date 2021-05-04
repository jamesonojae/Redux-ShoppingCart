import React from 'react';
// import styles from '../Products/Product/Product.module.css'
import Food from "./Food";
import  {connect} from 'react-redux';

const OrderFood = ({foods}) => {
    // console.log('foods', foods);
    return (
        <div className="pt-3">
            {
                foods.map((food) => (
                    <div key={food.foodId}>
                        <Food foodData={food} />
                    </div>
                ))
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        foods: state.shop.foods
    }
}

export default connect(mapStateToProps)(OrderFood);
