import React, {useEffect, useRef} from "react";
import styles from "./Cart.module.css";

import CartItem from "./CartItem/CartItem";
import {connect} from 'react-redux'

const Cart = ({ cart }) => {
  let totalPrice = cart.reduce((sum, {price, qty}) => sum + (parseInt(price) * qty), 0);
  let totalQuantity = cart.reduce((sum, {qty}) => sum + qty, 0);

  console.log('1', cart);
  useEffect(() => {
    console.log('cart changed');
    console.log('2', cart);
  }, [cart])
  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map(item => (
            <div key={item.id}>
              <CartItem itemData={item} />
            </div>
        ))}

      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalQuantity})</span>
          <span>$ {totalPrice}</span>

        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({cart}) => {
  return {
    cart
  }
}

export default connect(mapStateToProps)(Cart);
