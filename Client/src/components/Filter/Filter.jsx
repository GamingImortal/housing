import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Filter.scss";

export default function Filter() {
  return (
    <div className="filter">
      <h1>
        Search Results For <p>houses</p>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input id="city" name="city" placeholder="City Location"></input>
        </div>
      </div>
      <div className="bottom">
        {" "}
        <div className="item">
          <label> Gender</label>
          <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            min={0}
            type="number"
            input
            id="minPrice"
            name="minPrice"
            placeholder="any"
          ></input>
        </div>{" "}
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            min={0}
            max={10000}
            type="number"
            input
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          ></input>
        </div>{" "}
        <div className="item">
          <label>Distance</label>
          <select
            type="text"
            name="distance"
            placeholder="Distance from Campus"
          >
            {" "}
            <option value="distance">0 - 500 metres away from Campus</option>
            <option value="distance">500m - 1km metres away from Campus</option>
            <option value="distance">1km - 2km metres away from Campus</option>
            <option value="distance">More than 2km metres from Campus</option>
          </select>
        </div>{" "}
        <SearchIcon></SearchIcon>
      </div>
    </div>
  );
}
