import {LOGO_URL} from "../utils/Constants";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <ul>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
        <li>CART</li>
      </ul>
    </div>
  );
};

export default Header;
