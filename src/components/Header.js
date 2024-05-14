import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Constants";

const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    // useEffect(() => {

    // },[btnName])


    const onClick = () => {
      btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
    }

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Cart</li>
            <button className="login" onClick={() => onClick()}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header