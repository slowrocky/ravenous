import React from "react";

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
      <div className="preview">
        <img src={business.imageSrc} alt="business" />
      </div>
      <div className="info">
        <p className="name">{business.name}</p>
        <div className="address-container">
          <p className="address">{business.address}</p>
          <p className="city">{business.city}</p>
          <p className="state">{business.state}</p>
          <p className="zipcode">{business.zipCode}</p>
        </div>
        <div className="category-container">
          <p className="category">{business.category}</p>
          <p className="rating">{business.rating} stars</p>
          <p className="review-count">{business.reviewCount} reviews</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Business;
