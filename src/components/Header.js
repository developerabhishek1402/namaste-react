import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useUserInternetStatus from "../utils/useUserInternetStatus";

const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    useEffect(() => {
      console.log("it is calling")
    }, [btnName])


    const onClick = () => {
      btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
    }

    const uerrInternetStatus = useUserInternetStatus()

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
            <li>Online Status : {uerrInternetStatus ? "🟢" : "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <button className="login" onClick={() => onClick()}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header