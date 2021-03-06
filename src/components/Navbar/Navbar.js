import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import {connect} from 'react-redux';

const Navbar = ({cart}) => {
  return (
      <div className={styles.navbar}>
        <Link to="/">
          <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
        </Link>
        <Link to="/order-food">
          <h2 className={styles.navbar__logo}>Order Food</h2>
        </Link>
        <Link to="/cart">
          <div className={styles.navbar__cart}>
            <h3 className={styles.cart__title}>Cart</h3>
            <img
                className={styles.cart__image}
                src="https://image.flaticon.com/icons/svg/102/102276.svg"
                alt="shopping cart"
            />
            <div className={styles.cart__counter}>{cart.length}</div>
          </div>
        </Link>
      </div>
  );
};

const mapStateToProps = ({cart}) => ({
  cart
})

export default connect(mapStateToProps)(Navbar);
