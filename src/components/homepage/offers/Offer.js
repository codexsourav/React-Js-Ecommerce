import React from "react";
import styles from "./css/offer.module.css";
import Offer1 from "./Offercard/Offer1";
import Offer2 from "./Offercard/Offer2";
function Offer() {
  return (
    <div className="container">
      <div className={styles.offers}>
        <Offer1 />
        <Offer2 />
      </div>
    </div>
  );
}

export default Offer;
