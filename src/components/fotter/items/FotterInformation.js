import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Fotteritem.module.css";
import Fotteritemtitle from "./Fotteritemtitle";

function FotterInformation() {
  return (
    <div className={styles.formitem}>
      <Fotteritemtitle title="Information" />
      <div className={styles.contactlist}>
        <ul>
          <li>
            <a href="/#newcollection">New Products</a>
          </li>
          <li>
            <Link to="/#">Top Sellers</Link>
          </li>
          <li>
            <Link to="#">Our Blog</Link>
          </li>
          <li>
            <Link to="/about">About Our Shop</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FotterInformation;
