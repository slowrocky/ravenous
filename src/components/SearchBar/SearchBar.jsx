import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  const handleSortByChange = (sortByOptions) => {
    setSortBy(sortByOptions);
  };

  const handleSearch = () => {
    if (searchTerm && location) {
      onSearch(searchTerm, location, sortBy);
    } else {
      alert("Please enter both search term and location.");
    }
  };

  return (
    <React.Fragment>
      <div className={styles.SearchBar}>
        <div className={styles.sortByContainer}>
          <ul>
            {Object.keys(sortByOptions).map((sortByOption) => {
              let sortByOptionValue = sortByOptions[sortByOption];
              return (
                <li
                  key={sortByOptionValue}
                  className={sortBy === sortByOptionValue ? "active" : ""}
                  onClick={() => handleSortByChange(sortByOptionValue)}
                >
                  {sortByOption}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.inputsContainer}>
          <input
            placeholder="Search Businesses"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
