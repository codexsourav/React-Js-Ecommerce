import React from "react";
import styles from "./css/Highlight.module.css";
import LightItem from "./LightItem";
import { RiCaravanLine, RiRefund2Fill, RiVipDiamondLine } from "react-icons/ri";
function Highlightbox() {
  return (
    <div className="container">
      <div className={styles.highlight} data-aos="fade-up">
        <LightItem
          title="Free Delivery"
          desc="For orders above $100."
          icon={<RiCaravanLine />}
        />
        <LightItem
          title="100% Refund"
          desc="Money-back after 7 days"
          icon={<RiRefund2Fill />}
        />

        <LightItem
          title="Premium Quality "
          desc="Certified top quality items"
          icon={<RiVipDiamondLine />}
        />
      </div>
    </div>
  );
}

export default Highlightbox;
