import React from "react";
import '../Footer/Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        © {new Date().getFullYear()} Movie App. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
