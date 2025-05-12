import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./card.scss";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function Card({ item }) {
  const [click, setClick] = useState(false);

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.image}></img>
      </Link>
      <div className="textContainer">
        <Link to={`/${item.id}`}>
          <h2 className="title">
            <Link to={item.id}>{item.title}</Link>
          </h2>
          <p className="address">
            <span>{item.location}</span>
          </p>
          <p className="price">{item.price}</p>
        </Link>
        <div className="bottom">
          <div className="desription" style={{ color: "gray" }}>
            {item.description}
          </div>
          <div className="icons">
            {click ? (
              <BookmarkIcon
                style={{ color: "orange", cursor: "pointer" }}
                onClick={() => setClick(false)}
              />
            ) : (
              <BookmarkBorderOutlinedIcon
                style={{ color: "orange", cursor: "pointer" }}
                onClick={() => setClick(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
