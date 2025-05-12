import React, { useState } from "react";
import "./Register.scss";
import { Button } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");

    const password = formData.get("password");

    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", {
        username,
        email,

        password,
      });
    } catch (err) {
      console.log(res.data);
    }
  };

  return (
    <div className="register">
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <input type="text" required name="username" placeholder="Name" />
          <input type="text" required name="email" placeholder="email" />

          <input
            type="text"
            required
            name="Enter password"
            placeholder="password"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
