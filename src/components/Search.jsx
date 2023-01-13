import React from "react";
import searchIcon from "../assets/icons/search.svg";
import flower from "../assets/img/flower.svg";
import filter from "../assets/icons/filter.svg";
import random from "../assets/icons/random.svg";

export const Search = () => {
  return (
    <div className="search">
      <h1 className="search-title">
        Bir sózdi izleń, onı mángilikke yadlap qalıń.
      </h1>
      <div className="search-content">
        <div className="input">
          <input type="text" placeholder="sózlerdi izlew ushın jazıń" />
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <div className="btn-group">
          <button className="btn btn-search">
            <img src={filter} alt="filter" />
            <p>Filter</p>
          </button>
          <button className="btn btn-search">
            <img src={random} alt="filter" />
            <p>Alfavit</p>
          </button>
        </div>
        <img src={flower} alt="flower" />
      </div>
    </div>
  );
};

