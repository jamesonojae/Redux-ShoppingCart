import React, {useEffect, useRef, useState} from "react";
import styles from "./Cart.module.css";

import CartItem from "./CartItem/CartItem";
import {connect} from 'react-redux'
import {PaystackButton} from 'react-paystack';

const Cart = ({ cart }) => {
  const publicKey = 'pk_test_6e88c0901dd1c754463ab53e6eb253d55afa7121';
  let totalPrice = cart.reduce((sum, {price, qty}) => sum + (parseInt(price) * qty), 0);
  let totalQuantity = cart.reduce((sum, {qty}) => sum + qty, 0);
  let firstName = 'Onoja';
  let tel = '09087654544';
  let gmail = 'onoja@gmail.com';

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email: gmail,
    amount: totalPrice * 100,
    metadata: {
      name: firstName,
      phone: tel
    },
    publicKey,
    text: "Buy Now",
    onSuccess: () => {
      setEmail("");
      setName("");
      setPhone("");
    },
    onClose: () => alert("wait! You need this oil, don't go !!")
  }

  console.log(componentProps);
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
        <PaystackButton className={styles.summary__checkoutBtn} {...componentProps}>
          Proceed To Checkout
        </PaystackButton>
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
