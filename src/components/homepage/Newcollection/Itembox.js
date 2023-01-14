import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/itembox.module.css";
import { BsCartPlus, BsEye } from "react-icons/bs";
import { Rating } from "react-simple-star-rating";
function Itembox() {
  const addcart = () => {
    alert("Add To CArt");
  };
  return (
    <div className={styles.itembox} data-aos="fade-up">
      <div className={styles.imgsec}>
        <img
          src="https://sellbroke.com/_uploads/2018/11/ipad-pro-angle.png"
          alt="ipad"
        />
        <div className={styles.options}>
          <Link to="/product/id" className={styles.optionsbtn}>
            <BsEye />
          </Link>
          <button className={styles.optionsbtn} onClick={() => addcart()}>
            <BsCartPlus />
          </button>
        </div>
      </div>
      <div className={styles.productinfo}>
        <p className={styles.pname}>I Pad Pro</p>
        <p className={styles.price}>$800</p>
        <Rating
          initialValue={
            // Returns a random integer from 1 to 10:
            Math.floor(Math.random() * 5) + 1
          }
          allowHover={false}
          readonly={true}
          size={18}
        />
      </div>
    </div>
  );
}

export default Itembox;
