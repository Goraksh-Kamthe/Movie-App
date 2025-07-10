import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-box">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you’re looking for doesn’t exist or was moved.</p>
        <Link to="/" className="back-home">
          ⬅️ Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
