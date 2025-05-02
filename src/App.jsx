import React from "react";
import "./layout.scss";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./routes/HomePage";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
};

export default App;
