import React from "react";
import theme from "../../../static/theme";
//import logo from "../../../static/images/logo.png";

//TODO
//To make images importable https://github.com/twopluszero/next-images

function Header() {
  return (
    <div className="container">
      <div className="logo">
        {" "}
        <a>
          <img src="../../../static/images/js_logo.svg" />
        </a>
      </div>
      <div className="login caption white fontreg">
        <i className="user-icon white"></i>
        <span>Login</span>
      </div>
      <style jsx>{`
        .container {
          background: rgba(0, 0, 0, 0.5);
          padding: 8px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          width: 70px;
          height: 26px;
        }
        .logo img {
          width: 100%;
        }
        .login {
          line-height: 40px;

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
