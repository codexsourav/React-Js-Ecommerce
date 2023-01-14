import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import TitleBox from "../homepage/common/TitleBox";
import styles from "./css/style.module.css";
function ChackoutPage() {
  return (
    <div className="container">
      <br />
      <br />
      <TitleBox title="Chackout Your Orders" />
      <div className={styles.cartbox}>
        <div className={styles.products}>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>SubTotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="/images/phone.png" alt="Product" width={50} />
                </td>
                <td>I Phone 14</td>
                <td>$1220.00</td>
                <td>1</td>
                <td>$1220.00</td>
                <td>
                  <a href="#">
                    <RiDeleteBin7Line />
                    <span> REMOVE</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/images/phone.png" alt="Product" width={50} />
                </td>
                <td>I Phone 14</td>
                <td>$1220.00</td>
                <td>1</td>
                <td>$1220.00</td>
                <td>
                  <a href="#">
                    <RiDeleteBin7Line />
                    <span> REMOVE</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.chackoutpage}></div>
      </div>
    </div>
  );
}

export default ChackoutPage;
