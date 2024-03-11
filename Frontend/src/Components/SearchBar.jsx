import React, { useState } from "react";

const SearchBar = ({ onSearch, onSubmit }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    onSubmit(); // You can add additional logic here if needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for products..."
          aria-label="Search for products..."
          aria-describedby="basic-addon2"
          value={searchInput}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
