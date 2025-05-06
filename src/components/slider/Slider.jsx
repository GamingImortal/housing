import React from "react";
import "./Slider.scss";

export default function Slider({ image }) {
  return (
    <div className="slider">
      <div className="bigImage">
        <img src={image[0]} />
      </div>
      <div className="smallImages">
        {image.slice(1).map((image, index) => (
          <img src={image} alt="" key={index} />
        ))}
      </div>
    </div>
  );
}
