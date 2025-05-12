import React, { useState } from "react";
import "./Register.scss";
import { Button } from "@mui/material";
import axios from "axios";
import apiRequest from "../../lib/apiRequest";

const Login = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");

    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,

        password,
      });
      console.log(res.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="register">
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <input type="text" required name="username" placeholder="Name" />
          <input type="text" required name="email" placeholder="email" />

          <input
            type="password"
            required
            name="password"
            placeholder="password"
          />
          <button>Submit</button>
          {error && <span>{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
