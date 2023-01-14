import React from "react";
import TitleBox from "../common/TitleBox";
import Itembox from "./Itembox";
import styles from "./css/collection.module.css";
function Newcollection() {
  return (
    <div className="container" id="newcollection">
      <TitleBox title="New Collection" />
      <div className={styles.itemslist} data-aos="fade-up">
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

export default Newcollection;
