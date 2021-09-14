import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext";

const SearchName = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="input-group">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search name"
        aria-label="Search"
        onChange={(e) => context.handleSearchChange(e)}
      />
    </div>
  );
};

export default SearchName;