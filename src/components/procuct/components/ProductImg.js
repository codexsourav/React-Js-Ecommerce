import React from "react";
import styles from "../css/productimg.module.css";
import AliceCarousel from "react-alice-carousel";

import Imgslidebox from "./Imgslidebox";

function ProductImg() {
  const responsive = {
    0: { items: 1, itemsFit: "contain" },
  };
  const items = [<Imgslidebox />, <Imgslidebox />, <Imgslidebox />];

  return (
    <div className={styles.productimg} data-aos="fade-right">
      <div className={styles.imgbox}>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableButtonsControls={true}
          autoPlay={true}
          autoPlayInterval={5000}
          infinite={true}
        />
      </div>
    </div>
  );
}

export default ProductImg;
