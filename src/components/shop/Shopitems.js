import React from "react";
import TitleBox from "../homepage/common/TitleBox";

import Itembox from "../homepage/Newcollection/Itembox";
import styles from "./css/shop.module.css";
function Shopitems() {
  return (
    <div className="container">
      <div className={styles.shop}>
        <TitleBox title="Our Shop List" />
        <div className={styles.listbox}>
          <Itembox />
          <Itembox />
          <Itembox />
          <Itembox />
          <Itembox />
          <Itembox />
          <Itembox />
          <Itembox />
        </div>
      </div>
    </div>
  );
}

export default Shopitems;
