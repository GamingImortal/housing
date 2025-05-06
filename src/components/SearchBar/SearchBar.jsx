import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import "./SearchBar.scss";

const types = ["book", "view"];

export default function SearchBar() {
  const [click, setClick] = useState({
    type: "book",
    location: "",
    minPrice: 0,
    maxOrice: 0,
  });

  const swithType = (val) => {
    setClick((prev) => ({ ...prev, type: val }));
  };

  return (
    <div>
      <div className="searchbar">
        <div className="type">
          <br></br>
          <br></br>
          <br></br>
          {types.map((type) => (
            <Button
              variant="outlined"
              key={type}
              className={click.type === type ? "active" : ""}
              onClick={() => swithType(type)}
            >
              {type}
            </Button>
          ))}
        </div>
        <form>
          <input type="text" name="" placeholder="City Location" />{" "}
          <input
            type="number"
            name="minPrice"
            min={0}
            max={100000}
            placeholder="Min Price"
          />
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={100000}
            placeholder="Mix Price"
          />{" "}
          <SearchIcon className="SearchIcon" variant="outlined"></SearchIcon>
        </form>
      </div>
    </div>
  );
}
