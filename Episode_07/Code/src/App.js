import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const appRouter = new createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
