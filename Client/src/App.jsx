import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./routes/homePage/HomePage";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/listPage";
import { SinglePage } from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/profilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/loginPage/Login";
import About from "./routes/about/About";
import LandEmail from "./components/landlordemail/LandEmail";
import Register from "./routes/RegisterPage/Register";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/landlord",
          element: <LandEmail />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
