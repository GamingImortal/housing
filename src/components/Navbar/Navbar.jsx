import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "./navbar.scss";
import { orange } from "@mui/material/colors";

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="https://i.fbcd.co/products/resized/resized-750-500/uz-circle-logo-design-2-fb8652c227bb7be3e99ee44a92112301c9102f18145c382d1910c676aa06eb52.jpg"></img>
          <span style={{ fontFamily: "fantasy" }}>StudentHousing</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Landlords</a>
      </div>

      <div className="right">
  {user ? (
    <div className="user">
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
      <span>Hove Nelius</span>
      <Link to ="/profile" className="profile">
      <div className ="notification"> 3</div>
      <span>Profile</span>
      </Link>
    </div>
  ) : (
    <>
      <a href="/">Sign In</a>
      <a href="/" className="register">Sign Up</a>
    </>
  )}


        <div className="menuIcon">
          <MenuIcon onClick={() => setOpen(!open)}></MenuIcon>
        </div>

        <div className={open ? "menu  active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Landlords</a>
          <a href="">Others</a>
          <a href="">signIn</a>
          <a href="">signUp</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
