import React from "react";
import SearchName from "../SearchName";
import "./style.css";

const SearchArea = () => (
  <div className="bg-light">
    <div className="search-area col-4">
      <SearchName />
    </div>
  </div>
);

export default SearchArea;