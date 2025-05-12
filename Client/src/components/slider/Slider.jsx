import React, { useState } from "react";
import "./Slider.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Slider({ image }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(image.length - 1);
      } else {
        imageIndex - 1;
      }
    } else {
      if (imageIndex === image.length - 1) {
        setImageIndex(0);
      } else {
        imageIndex + 1;
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <ArrowBackIosIcon onClick={() => setImageIndex(imageIndex - 1)} />
          </div>
          <div className="imageContainer">
            {" "}
            <img src={image[imageIndex]} />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            {" "}
            <ArrowForwardIosIcon
              onClick={() => setImageIndex(imageIndex + 1)}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            x
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={image[0]} onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {image.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}
