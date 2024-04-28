import React from "react";
import styles from "./Business.module.css";

const Business = () => {
  const business = {
    imageSrc:
      "https://www.allrecipes.com/thmb/9UTj7kZBJDqory0cdEv_bw6Ef_0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-2x1-BG-2976-d5926c9253d3486bbb8a985172604291.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  };
  return (
    <React.Fragment>
      <div className={styles.Business}>
        <div className={styles.imageContainer}>
          <img src={business.imageSrc} alt="" />
        </div>
        <p className={styles.name}>{business.name}</p>
        <div className={styles.infoContainer}>
          <div className={styles.addressContainer}>
            <p className={styles.address}>{business.address}</p>
            <p className={styles.city}>{business.city}</p>
            <div className={styles.stateZipcodeContainer}>
              <p className={styles.state}>{business.state}</p>
              <p className={styles.zipcode}>{business.zipCode}</p>
            </div>
          </div>
          <div className={styles.categoryContainer}>
            <p className={styles.category}>{business.category}</p>
            <p className={styles.rating}>{business.rating} stars</p>
            <p className={styles.reviewCount}>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Business;
