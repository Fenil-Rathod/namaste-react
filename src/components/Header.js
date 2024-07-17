import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStausCheck from "../utils/useOnlineStatusCheck";

const Header = () => {

  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStausCheck();
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="w-40"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              Online Status : {onlineStatus? "✅" : "🔴"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about"> About Us </Link>
            </li>
            <li>
             <Link to="/contact"> Contact Us </Link>
            </li>
            <li>
             <Link to="/Grocery"> Grocery </Link>
            </li>
            <li>
              <Link to="/cart"> Cart </Link>             
            </li>
            <button className="login-btn" onClick={() => {
              btnName === "Login" 
              ? setbtnName("LogOut") 
              : setbtnName("Login");
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export  default  Header;