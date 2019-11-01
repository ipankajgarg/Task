import React from "react";

function AboutApp() {
  return (
    <div className="container">
      <div style={{ margin: "0px 24px" }}>
        <h3>Stay Connected With</h3>
        <span>
          <strong>Jeevansathi </strong>Apps{" "}
        </span>
      </div>

      <img className="group" src="../../static/images/group_64.png" />
      <p>
        Access quick & simple search, instant updates and a great user
        experience on your phone. Download our apps rated best in the online
        matrimony segment.
      </p>
      <img
        className="app-icon"
        src="../../static/images/google_play_icon.png"
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
