import React from "react";
import styles from "./Products.module.css";

import Product from "./Product/Product";
import { ROOMS } from "../../mocks/mock-data"

const Products = () => {
  return (
      <div className={styles.products}>
        {ROOMS.map((prod) => (
            <Product key={prod.id} productData={prod} />
        ))}
      </div>
  );
};

export default Products;
