import { LOGO_URL } from "../utils/Constants";
import { useState, useEffect } from "react";

const Header = () => {

  const [loginBtnName, setLoginBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect")
  });

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <ul>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
        <li>CART</li>
        <button className="login" onClick={() => {
          loginBtnName === "Login" ? setLoginBtnName("Logout") : setLoginBtnName("Login")
        }}>{loginBtnName}</button>
      </ul>
    </div>
  );
};

export default Header;
