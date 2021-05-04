import React, {useState} from "react";
import styles from "./CartItem.module.css";

import {connect} from 'react-redux';
// import {removeFromCart, adjustQty} from '../../../redux/Shopping/shopping-actions';
import {handleAdjustQty, handleRemoveFromCart} from '../../../redux/actions/cart-actions';

const CartItem = ({itemData, handleRemoveFromCart, handleAdjustQty}) => {
  const [quantity, setQuantity] = useState(itemData.qty)
  // console.log(itemData.image, itemData.description, itemData.qty, itemData.price);
  const onChangeHandler = (e) => {
    // console.log(e.target.value);
    setQuantity(e.target.value);
    handleAdjustQty(itemData.id, e.target.value);
  }
  return (
      <div className={styles.cartItem}>
        <img
            className={styles.cartItem__image}
            src={itemData.image}
            alt={itemData.title}
        />
        <div className={styles.cartItem__details}>
          <p className={styles.details__title}>{itemData.title}</p>
          <p className={styles.details__desc}>{itemData.description}</p>
          <p className={styles.details__price}>$ {itemData.price}</p>
        </div>
        <div className={styles.cartItem__actions}>
          <div className={styles.cartItem__qty}>
            <label htmlFor="qty">Qty</label>
            <input min="1" type="number" id="qty" name="qty" value={quantity}
            onChange={onChangeHandler}/>
          </div>
          <button  onClick={() => handleRemoveFromCart(itemData.id)}
              className={styles.actions__deleteItemBtn}
                 >
            <img
                src="https://image.flaticon.com/icons/svg/709/709519.svg"
                alt=""
            />
          </button>
        </div>
      </div>
  );
};



export default connect(null, {handleRemoveFromCart, handleAdjustQty})(CartItem);
