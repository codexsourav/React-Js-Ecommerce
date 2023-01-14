import React from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./css/navbar.module.css";

function Navsearch() {
  return (
    <div className={styles.search}>
      <BsSearch />
      <input type="text" className={styles.inp} placeholder="Search..." />
    </div>
  );
}

export default Navsearch;
