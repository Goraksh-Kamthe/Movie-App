import React from "react";
import { Link } from "react-router-dom";
import userLogo from "../../assets/user-image.png";
import "../Header/Header.scss";
const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/" className="logo-link">
          <div className="movie-logo">Movie App</div>
        </Link>
        <div className="movie-image">
          <img src={userLogo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
