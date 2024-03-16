import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Project1 from "./components/Projects/Project1";
import Project2 from "./components/Projects/Project2";
import Faq from "./components/FAQ/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "project-2",
        element: <Project2 />,
      },
      {
        path: "project-1",
        element: <Project1 />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
