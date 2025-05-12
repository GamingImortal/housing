import React, { useContext } from "react";
import "./HomePage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import { orange } from "@mui/material/colors";
import { AuthContext } from "../../context/AuthContext";

export default function HomePage() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  return (
    <div className="homepage">
      <div className="textContainer">
        <br></br>
        <br></br>
        <h1>Find Off Campus Accomodation & Rent your dream place</h1>
        <br></br> <br></br>
        <p style={{ color: "orange " }}>
          Check out and book our various listed houses with suitable living
          conditions for students
        </p>
        <SearchBar />
        <div className="box">
          <h1></h1>
          <h2></h2>
        </div>{" "}
        <div className="box">
          <h1></h1>
          <h2></h2>
        </div>{" "}
        <div className="box">
          <h1></h1>
          <h2></h2>
        </div>
      </div>
      <div className="imageContainer">
        <img src="https://www.campusperth.com/assets/img/campus-rooms-2.gif?v1"></img>
      </div>
    </div>
  );
}
