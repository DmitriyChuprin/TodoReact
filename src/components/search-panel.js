<<<<<<< HEAD
import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
  return (
    <input type="text"
              className="form-control search-input"
              placeholder="type to search" />
  );
=======
import React from "react";

const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: "20px"
  };
  return <input style={searchStyle} placeholder={searchText} />;
>>>>>>> 83527d46e14b95654475c7e8b62f5376d7e626ad
};

export default SearchPanel;
