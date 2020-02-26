import React from "react";
import Header from "./Header";
import SearchBox from "./SearchBox";
import Button from "../../common/Button";

function Banner(props) {
  return (
    <div className="banner-image">
      <div>
        <Header />
        <div className="white fontreg caption">
          <p>Love is looking for you,</p>
          <h1> Be found</h1>
        </div>
        <a
        onClick={()=>{
props.trackRegistrationGA("register_gnb")
         window.location.href="profile/registration_new.php?source=home_hero"
        }}
        
        >
          <button>Register Free</button>
        </a>
        {/* <SearchBox /> */}
      </div>
      <style jsx>{`
        .banner-image {
          background: url(https://static.jeevansathi.com/spa/dist/icons/cover_picture.jpg) left top
            no-repeat;
          background-size: cover;
          min-height: 360px;
          position: relative;
          font-family: "Cabin", sans-serif;
        }

        .caption {
          font-size: 16px;
          // margin-top: 150px;
          margin-bottom: 8px;
          text-align: center;
          position: absolute;
          width: 100%;
          bottom: 70px;
        }
        p {
          font-size: 14px;
          text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
          margin: 0px;
          padding-left: 60px;
        }
        h1 {
          font-size: 70px;
          font-family: "sarah-script", "sans-serif";
          font-weight: 400;
          margin: 0px;
          margin-top: -10px;
        }

        button {
          font-size: 14px;
          color: #fff;
          letter-spacing: 0;
          padding: 10px 20px;
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translate(-50%, 0%);
          background: #d9475c;
          display: inline-block;
          font-weight: 600;
          vertical-align: middle;
          user-select: none;
          border: 1px solid transparent;
          line-height: 1.5;
          border-radius: 0.25rem;
          font-family: "Cabin", sans-serif;
        }
      `}</style>
    </div>
  );
}

export default Banner;
