import React from "react";
import { Popup, Marker } from "react-leaflet";
import { Link } from "react-router-dom";
import "./Pin.scss";

export default function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popContainer">
          <Link to={`/${item.id}`}>
            <img src={item.image}></img>
          </Link>
        </div>
        <div className="textContainer">
          <Link to={`/${item.id}`}>{item.title}</Link>
          <span className="price">{item.price}</span>
        </div>
      </Popup>
    </Marker>
  );
}
