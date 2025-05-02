import React from "react";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="textContainer">
        <br></br>
        <br></br>
        <h1>Find Off Campus Accomodation & Rent your dream place</h1>
        <br></br>{" "}
        <p>
          Check out and book our various listed houses with suitable living
          conditions for students
        </p>
      </div>
      <div className="imageContainer">
        <img src="https://www.campusperth.com/assets/img/campus-rooms-2.gif?v1"></img>
      </div>
    </div>
  );
}
