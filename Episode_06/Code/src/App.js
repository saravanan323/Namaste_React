import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";

const AppLayout = () => (
  <>
    <Header />
    <Body />
  </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
