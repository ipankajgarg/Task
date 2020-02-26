import React from "react";
import LazyLoad from 'react-lazyload';


function AboutApp() {
  return (
    <div className="container">
      <div style={{ margin: "0px 24px" }}>
        <h3>Stay Connected With</h3>
        <span>
          <strong>Jeevansathi </strong>Apps{" "}
        </span>
      </div>
      <LazyLoad height={200}>
      <img className="group" src="https://www.jeevansathi.com/images/jsms/photo/group_64.png" />
      </LazyLoad>
      <p>
        Access quick & simple search, instant updates and a great user
        experience on your phone. Download our apps rated best in the online
        matrimony segment.
      </p>
      <img
        className="app-icon"
        src="https://www.jeevansathi.com/images/jsms/photo/Google%20Play%20Icon.png"
      />

      <style jsx>{`
        .container {
          padding-bottom: 32px;
        }
        h3 {
          font-size: 12px;
          font-weight: 700;
          color: #8a9db0;
          margin-bottom: 4px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .group {
          background: #34495e;
          width: 100%;
          display: block;
          padding-top: 40px;
          margin-top: 10px;
        }

        span {
          font-size: 20px;
        }
        strong {
          color: #d9475c;
        }

        p {
          font-size: 16px;
          color: #8a9db0;
          margin: 20px 24px 20px;
        }

        .app-icon {
          width: 103px;
          margin: 0px 24px;
        }
      `}</style>
    </div>
  );
}

export default AboutApp;
