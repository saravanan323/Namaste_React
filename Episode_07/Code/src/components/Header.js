import { LOGO_URL } from "../utils/Constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {

  const [loginBtnName, setLoginBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect")
  });

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <ul>
        <Link to={"/"}>HOME</Link>
        <Link to={"/about"}>ABOUT US</Link>
        <Link to={"/contact"}>CONTACT US</Link>
        <Link to={"/cart"}>CART</Link>
        <button className="login" onClick={() => {
          loginBtnName === "Login" ? setLoginBtnName("Logout") : setLoginBtnName("Login")
        }}>{loginBtnName}</button>
      </ul>
    </div>
  );
};

export default Header;
