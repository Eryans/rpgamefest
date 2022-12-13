import { StrictMode, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Planning from "./routes/Planning";
import ErrorPage from "../ErrorPage";
import Plan from "./routes/Plan";
import Home from "./routes/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/planning",
          element: <Planning />,
        },
        {
          path: "/plan",
          element: <Plan />,
        },
      ],
    },
    {},
  ]);

  return (
    <div>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </div>
  );
}

export default App;
