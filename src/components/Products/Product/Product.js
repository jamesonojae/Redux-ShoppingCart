import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

import {connect} from 'react-redux'
import {handleAddToCart} from '../../../redux/actions/cart-actions';
// import {addToCart, loadCurrentItem} from '../../../redux/Shopping/shopping-actions';

const Product = ({productData, handleAddToCart}) => {
   // console.log('productData', productData)
  return (
      <div className={styles.product}>
        <img className={styles.product__image}
             src={productData.image} alt={productData.title} />

        <div className={styles.product__details}>
          <p className={styles.details__title}>{productData.title}</p>
          <p className={styles.details__desc}>{productData.description}</p>
          <p className={styles.details__price}>$ {productData.price}</p>
        </div>

        <div className={styles.product__buttons}>
          <Link to={`/product/${productData.id}`}>
            <button
                className={`${styles.buttons__btn} ${styles.buttons__view}`}>
              View Item
            </button>
          </Link>
          <button
              onClick={() => handleAddToCart(productData)}
              className={`${styles.buttons__btn} ${styles.buttons__add}`}>
            Add To Cart
          </button>
        </div>
      </div>
  );
};

export default connect(null, {handleAddToCart})(Product);
