import React from "react";
import styles from "./css/productitem.module.css";
import ProductImg from "./components/ProductImg";
import Productinfo from "./components/Productinfo";
import Productab from "./Producttabs/Productab";

import Populer from "../homepage/Popular/Populer";

function Productitem() {
  return (
    <>
      <div className="container">
        <div className={styles.procuct}>
          <ProductImg />
          <Productinfo />
        </div>
        <div className={styles.showtabs}>
          <Productab />
        </div>
      </div>
      <Populer />
    </>
  );
}

export default Productitem;
