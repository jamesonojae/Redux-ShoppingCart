import React from "react";
import styles from "./Products.module.css";

import {connect} from 'react-redux'

import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
      <div className={styles.products}>
        {products.map((prod) => (
            <Product key={prod.id} productData={prod} />
        ))}
      </div>
  );
};

const mapStateToProps = state => {
  return {
    // shop; is the shop assigned to our root reducer
    products: state.shop.products
  }
}

export default connect(mapStateToProps)(Products);
