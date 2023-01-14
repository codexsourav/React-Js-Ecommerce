import React from "react";
import styles from "../css/Fotteritem.module.css";
import Fotteritemtitle from "./Fotteritemtitle";

function Fottercontact() {
  return (
    <div className={styles.formitem}>
      <Fotteritemtitle title="Contact" />
      <div className={styles.contactlist}>
        <ul>
          <li> 2/45 Tower Street, New York, USA </li>
          <li> 0012 678 8899 </li>
          <li> contact@elemart.com </li>
          <li> www.elemart.com </li>
        </ul>
      </div>
    </div>
  );
}

export default Fottercontact;
