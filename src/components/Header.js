import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStausCheck from "../utils/useOnlineStatusCheck";

const Header = () => {

  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStausCheck();
    return (
      <div className="flex justify-between bg-green-100 h-24 shadow-lg">
        <div className="logo-container">
          <img
            className="w-40 overflow-auto h-24" 
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-5 m-5">
            <li className="px-2">
              Online Status : {onlineStatus? "✅" : "🔴"}
            </li>
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about"> About Us </Link>
            </li>
            <li className="px-2">
             <Link to="/contact"> Contact Us </Link>
            </li>
            <li className="px-2">
             <Link to="/Grocery"> Grocery </Link>
            </li>
            <li className="px-2">
              <Link to="/cart"> Cart </Link>             
            </li>
            <button className="login-btn px-2" onClick={() => {
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