import React from "react";
import theme from "../../../static/theme";
//import logo from "../../static/images/logo.png";

//TODO
//To make images importable https://github.com/twopluszero/next-images

function Header() {
  return (
    <div className="container">
      <div className="logo"></div>
      <div className="login caption white fontreg">
        <i className="user-icon white"></i>
        <span>Login</span>
      </div>
      <style jsx>{`
        .container {
          background-color: ${theme.secondaryColor};

          height: 40px;
          display: flex;
          justify-content: space-between;
        }
        .logo {
          flex-basis: 118px;
          background-color: white;
          background-image: url(../../../static/images/homeSpriteNewFinal.png);
          background-repeat: no-repeat;

          background-position: -20px -151px;
        }
        .login {
          line-height: 40px;
          padding-right: 13px;
          font-size: 13px;
        }
        .user-icon {
          background-image: url(../../../static/images/homeSpriteNewFinal.png);
          width: 20px;
          background-position: -1px 2px;
          height: 18px;

          display: inline-block;
        }
      `}</style>
    </div>
  );
}

export default Header;
