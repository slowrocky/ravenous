import React from "react";
import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

const BusinessList = () => {
  let businessList = Array(9).fill();
  return (
    <React.Fragment>
      <div className={styles.BusinessList}>
      {React.Children.toArray(businessList.map((row) => <Business />))}
      </div>
    </React.Fragment>
  );
};

export default BusinessList;
