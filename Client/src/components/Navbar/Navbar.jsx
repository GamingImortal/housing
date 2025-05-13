import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import "./navbar.scss";
import { orange } from "@mui/material/colors";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="https://i.fbcd.co/products/resized/resized-750-500/uz-circle-logo-design-2-fb8652c227bb7be3e99ee44a92112301c9102f18145c382d1910c676aa06eb52.jpg"></img>
          <span style={{ fontFamily: "fantasy" }}>StudentHousing</span>
        </a>
        <Link to="">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/landlord">Landlords</Link>
      </div>

      <div className="right">
        {currentUser ? (
          <div className="user">
            <img
              src={
                currentUser.avatar ||
                "https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png"
              }
              alt="User Avatar"
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification"> 3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/signin" className="register">
              Sign In
            </a>
          </>
        )}

        <div className="menuIcon">
          <MenuIcon onClick={() => setOpen(!open)}></MenuIcon>
        </div>

        <div className={open ? "menu  active" : "menu"}>
          <Link to="">Home</Link>
          <Link to="/about">About</Link>
          <Link to="">Landlords</Link>
          <Link to="">Others</Link>
          <Link to="">signIn</Link>
          <Link to="">signUp</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
