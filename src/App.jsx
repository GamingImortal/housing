import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./routes/homePage/HomePage";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/listPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
