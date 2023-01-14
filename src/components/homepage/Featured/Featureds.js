import React from "react";
import AliceCarousel from "react-alice-carousel";
import Productbox from "./Productbox";
import styles from "./css/featured.module.css";
import TitleBox from "../common/TitleBox";
function Featureds() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },

    1024: { items: 3, itemsFit: "contain" },
  };

  const items = [
    <Productbox
      img="https://sellbroke.com/_uploads/2018/11/ipad-pro-angle.png"
      name="iPad Pro"
      price="₹9639.00"
    />,
    <Productbox
      img="https://www.citypng.com/public/uploads/small/11662630709bkutgtwlwvxrtjk7mcinmilyuky4a01mhyyh4myfygdd5jvsfjb9yahwqoa9dnq1tqc4q3edvsp48zgpwjcjbfkjdq9r0su35dzr.png"
      name="Apple Watch Ultra"
      price="₹10581.00"
    />,
    <Productbox
      img="https://png.monster/wp-content/uploads/2022/09/png.monster-209-323x370.png"
      name="iPhone 14 Pro Max"
      price="₹129900.00"
    />,
  ];

  return (
    <div className="container">
      <TitleBox title="Featured Products" />
      <div className={styles.productslider} data-aos="fade-up">
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

export default Featureds;
