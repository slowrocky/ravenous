import React from "react";
import Business from "../Business/Business";

const BusinessList = () => {
  let businessList = Array(9).fill();
  return (
    <React.Fragment>
      {React.Children.toArray(businessList.map((row) => <Business />))}
    </React.Fragment>
  );
};

export default BusinessList;
