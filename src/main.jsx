import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Project1 from "./components/Projects/Project1/Project1";
import Project2 from "./components/Projects/Project2/Project2";
import Faq from "./components/FAQ/Faq";
import Speedometer from "./components/Input/Speedometer";
import SentiAnalysis from "./components/SentimentAnalysis/SentiAnalysis";
import PageNotFound from "./components/Page-404/PageNotFound";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, errorElement: <ErrorPage /> },
      {
        path: "/productivity-analyzer",
        element: <Project1 />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/tweets-analyzer",
        element: <Project2 />,
        errorElement: <ErrorPage />,
      },
      { path: "/faq", element: <Faq />, errorElement: <ErrorPage /> },
      {
        path: "/productivity-analyzer/teams-productivity",
        element: <Speedometer />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/tweets-analyzer/sentiment-analysis",
        element: <SentiAnalysis />,
        errorElement: <ErrorPage />,
      },
      { path: "*", element: <PageNotFound />, errorElement: <ErrorPage /> },
    ],
  },
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  {
    path: "/productivity-analyzer",
    element: <Project1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tweets-analyzer",
    element: <tweets-analyzer />,
    errorElement: <ErrorPage />,
  },
  { path: "/faq", element: <Faq />, errorElement: <ErrorPage /> },
  {
    path: "/productivity-analyzer/teams-productivity",
    element: <Speedometer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tweets-analyzer/sentiment-analysis",
    element: <SentiAnalysis />,
    errorElement: <ErrorPage />,
  },
  { path: "*", element: <PageNotFound />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
