import React from "react";
import TitleBox from "../common/TitleBox";
import Itembox from "../Newcollection/Itembox";
import styles from "../Newcollection/css/collection.module.css";
function Populer() {
  return (
    <div className="container">
      <TitleBox title="Popular Products" />
      <div className={styles.itemslist}>
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
  );
}

export default Populer;
