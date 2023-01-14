import React from "react";
import styles from "../css/Fotteritem.module.css";
import Fotteritemtitle from "./Fotteritemtitle";

function Myaccount() {
  return (
    <div className={styles.formitem}>
      <Fotteritemtitle title="My Account" />
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        mollitia quasi dignissimos voluptate officia unde error quisquam.
        Repellat, officiis ad!
      </p>
    </div>
  );
}

export default Myaccount;
