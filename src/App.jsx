import React from "react";
import "./layout.scss";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./routes/homePage/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/list",
      element: <listPage />,
    },
  ]);

  return (
    /*<>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <HomePage />
        </div>
      </div>
      </>*/
    <RouterProvider router={router} />
  );
};

export default App;
