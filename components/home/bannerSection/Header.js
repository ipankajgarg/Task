import React from "react";
import theme from "../../../static/theme";
import GA from "../../../static/GA";
//import logo from "../../../static/images/logo.png";

//TODO
//To make images importable https://github.com/twopluszero/next-images


if(typeof window !== "undefined"){
var GAObject = new GA();
}

function Header() {
  return (
    <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 500 }}>
      <div id="headerContainer" className="container ">
        <div className="logo">
          {" "}
          <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src="https://www.jeevansathi.com/images/jsms/photo/js_logo.svg" />
          </a>
        </div>
        <div className="login caption white fontreg">
          <a onClick={()=>{
          GAObject.gaTrack('','jsms', 'Homepage_R', 'login')
        window.location.href="/login"
          }
        }  href="/login">
            {/* <i className="user-icon white"></i> */}
            <span>Login</span>
          </a>
        </div>
        <style jsx>{`
          .container {
            background: rgba(0, 0, 0, 0.5);
            padding: 8px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .headerBg2 {
            background: #34495e;
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
    </div>
  );
}

export default Header;
