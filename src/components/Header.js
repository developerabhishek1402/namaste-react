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
      <div className="flex justify-between shadow-lg sm:bg-yellow-50 lg:bg-red-200">
        <div className="logo-container">
          <img
            className="w-20"
            src={LOGO_URL}
          />
        </div>
  
        <div className="nav-items">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status : {uerrInternetStatus ? "🟢" : "🔴🎵"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/contact-us">Contact Us</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4">Cart</li>
            <button className="login" onClick={() => onClick()}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header