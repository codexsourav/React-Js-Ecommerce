import React, { useState } from "react";
import styles from "./css/productabs.module.css";
import Faqtab from "./Tabs/Faqtab";
import PdInfotab from "./Tabs/PdInfotab";
import Reviewstab from "./Tabs/Reviewstab";
function Productab() {
  const [tabindex, settabindex] = useState(0);
  const componemts = [<PdInfotab />, <Faqtab />, <Reviewstab />];

  return (
    <>
      <div className={styles.Productab}>
        <div
          className={
            tabindex === 0 ? styles.tab + " " + styles.activetab : styles.tab
          }
          onClick={() => settabindex(0)}
        >
          <p> Product information </p>
        </div>
        <div
          className={
            tabindex === 1 ? styles.tab + " " + styles.activetab : styles.tab
          }
          onClick={() => settabindex(1)}
        >
          <p>FAQ</p>
        </div>
        <div
          className={
            tabindex === 2 ? styles.tab + " " + styles.activetab : styles.tab
          }
          onClick={() => settabindex(2)}
        >
          <p>Reviews</p>
        </div>
      </div>
      <div data-aos="fade-up">{componemts[tabindex]}</div>
    </>
  );
}

export default Productab;
