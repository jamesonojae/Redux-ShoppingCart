import React from 'react';
import styles from "../Products/Product/Product.module.css";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {handleAddToCart} from '../../redux/actions/cart-actions';

const Food = ({foodData, handleAddToCart}) => {
    // console.log('foodData', foodData);
    return (
        <div className={styles.product}>
            <img className={styles.product__image}
                 src={foodData.image} alt='{foodData.image}' />

            <div className={styles.product__details}>
                <p className={styles.details__title}>{foodData.foodName}</p>
                <p className={styles.details__desc}>{foodData.description}</p>
                <p className={styles.details__price}>$ {foodData.price}</p>
            </div>
            <div className={styles.product__buttons}>
                <Link to={`/order-food`}>
                    <button
                        className={`${styles.buttons__btn} ${styles.buttons__view}`}>
                        View Item
                    </button>
                </Link>
                <button
                    onClick={() => handleAddToCart(foodData)}
                    className={`${styles.buttons__btn} ${styles.buttons__add}`}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default connect(null, {handleAddToCart})(Food);
