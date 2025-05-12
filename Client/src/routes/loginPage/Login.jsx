import React, { useState } from "react";
import "./Login.scss";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <div className="login">
      <div className="signin">
        <form action="">
          <input type="text" name="regnum" placeholder="Registration Number" />
          <input type="text" name="Enter password" placeholder="password" />
          <Button>Log In</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
