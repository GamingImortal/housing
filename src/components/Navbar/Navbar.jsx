import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

import "./navbar.scss";
import { orange } from "@mui/material/colors";

function Navbar() {
  const [open, setOpen] = useState(false);

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
        <a href="">signIn</a>
        <a href="">
          <Button variant="outlined">signUp</Button>
        </a>
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
