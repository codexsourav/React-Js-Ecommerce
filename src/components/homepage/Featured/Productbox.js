import React from "react";
import { Rating } from "react-simple-star-rating";
import styles from "./css/product.module.css";
function Productbox({ name, img, price }) {
  return (
    <div className={styles.product}>
      <div className={styles.imgbox}>
        <img src={img} alt="Iphone" width={150} />
      </div>
      <div className={styles.productinfo}>
        <p className={styles.prodname}>{name}</p>
        <Rating
          initialValue={Math.floor(Math.random() * 5) + 1}
          allowHover={false}
          readonly={true}
          size={18}
        />
        <p className={styles.price}>{price}</p>
        <button className={styles.addcart}>Add To Cart</button>
      </div>
    </div>
  );
}

export default Productbox;
