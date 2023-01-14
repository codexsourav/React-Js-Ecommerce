import React, { useState } from "react";

import TitleBox from "../homepage/common/TitleBox";
import styles from "./css/adress.module.css";
import InputBox from "./InputBox";

function Address() {
  const [addressd, setAddress] = useState({
    name: "",
    mobile: "",
    houseno: "",
    area: "",
    pincode: "",
    city: "",
    state: "",
  });
  const [error, seterror] = useState({
    name: "",
    mobile: "",
    houseno: "",
    area: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handeladdress = ({ target }) => {
    setAddress({ [target.name]: target.value, ...addressd });
    console.log(addressd);
  };
  const handelsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className={styles.adress}>
        <TitleBox title="Confirm Your Address" />
        <div className={styles.addressbox}>
          <div className={styles.mapbox}>
            <img src="/images/location.png" alt="address" />
          </div>
          <div className={styles.inputbox}>
            <InputBox
              title="Enter Your Full Name"
              type="text"
              name="name"
              value={addressd.name}
              setdata={handeladdress}
            />
            <InputBox
              title="Mobile Number"
              type="text"
              name="mobile"
              value={addressd.mobile}
              setdata={handeladdress}
            />
            <InputBox
              title="Flat,House No.,Building,Company"
              type="text"
              name="houseno"
              value={addressd.houseno}
              setdata={handeladdress}
            />
            <InputBox
              title="Area,Street,Sector,Vilage"
              type="text"
              name="area"
              value={addressd.area}
              setdata={handeladdress}
            />
            <InputBox
              title="Pincode"
              type="text"
              name="pincode"
              value={addressd.pincode}
              setdata={handeladdress}
            />
            <InputBox
              title="Town/City"
              type="text"
              name="city"
              value={addressd.city}
              setdata={handeladdress}
            />
            <InputBox
              title="State"
              type="text"
              name="state"
              value={addressd.state}
              setdata={handeladdress}
            />

            <button className={styles.btn} onSubmit={(e) => handelsubmit(e)}>
              Confirm Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
