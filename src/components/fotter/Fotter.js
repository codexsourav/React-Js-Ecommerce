import React from "react";
import styles from "./css/fotter.module.css";
import Fottercontact from "./items/Fottercontact";
import FotterInformation from "./items/FotterInformation";
import Myaccount from "./items/Myaccount";

function Fotter() {
  return (
    <>
      <div className={styles.fotter}>
        <Myaccount />
        <Fottercontact />
        <FotterInformation />
      </div>
      <div className={styles.copyfotter}>
        <p>© Copyright {new Date().getFullYear()} powered by Souarv0W</p>
      </div>
    </>
  );
}

export default Fotter;
