import React, { useState, useContext } from "react";
import "./Login.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [isloading, setloading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    setError("");

    const formData = new FormData(e.target);

    const username = formData.get("username");

    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,

        password,
      });
      updateUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="login">
      <div className="signin">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            name="username"
            placeholder="Registration Number"
          />
          <input type="text" required name="password" placeholder="password" />
          <button disabled={isloading}>Log In</button>
          {error && <span>{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
