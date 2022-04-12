import React from "react";
import Search_bar from "../images/Search_bar.png";
import search from "../images/search.png"

function Searchbar() {
  return (
    <div>
      <div className="Search-bar" />
      <div className="search_circle" ></div>
      <img className="search" src={search}/>
      

    </div>
  );
}

export default Searchbar;