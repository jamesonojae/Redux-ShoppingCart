import React, {useState, useEffect} from "react";
import styles from "./Cart.module.css";

import CartItem from "./CartItem/CartItem";
import {connect} from 'react-redux'

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItem, setTotalItem] = useState(0)
  // console.log(cart);
  // to get the total price and qty
  useEffect(() => {
    // cart.reduce((sum, {cost, quantity}) => sum + (parseInt(cost) * quantity), 0);
    // let items = 0; let price = 0;
    const price = cart.reduce((sum, {price, qty}) => sum + (parseInt(price) * qty), 0);
    const items = cart.reduce((sum, {qty}) => sum + qty, 0);
    /* cart.forEach((item) => {
      item += item.qty;
      price += item.qty * item.price
    }); */
    setTotalPrice(price);
    setTotalItem(items);

  }, [cart, totalItem, totalPrice, setTotalItem, setTotalPrice])
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
            <span>TOTAL: ({totalItem})</span>
            <span>$ {totalPrice}</span>
          </div>
          <button className={styles.summary__checkoutBtn}>
            Proceed To Checkout
          </button>
        </div>
      </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart);
