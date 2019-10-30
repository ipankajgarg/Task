import React from "react";

function Footer() {
  return (
    <div className="container">
      <div>
        <span className="white">Follow us on</span>
        <br />
        <a className="facebook">
          {" "}
          <i></i>
        </a>
        <a className="twitter">
          {" "}
          <i></i>
        </a>
        <a className="linkedin">
          {" "}
          <i></i>
        </a>
      </div>
      <div className="white">
        <span>Call Customer care</span>
        <h3 className="fontreg">1-800-419-6299</h3>
      </div>

      <style jsx>{`
        .container {
          background: rgba(52, 73, 94, 0.88);
          padding: 20px 30px;
          display: flex;
          justify-content: space-between;
        }
        span {
          font-size: 13px;
        }

        h3 {
          font-size: 20px;
          margin: 5px 0px 0px;
        }

        .facebook {
          background-image: url(../../static/images/homeSpriteNewFinal.png);
          background-position: -137px -157px;
          width: 28px;
          height: 32px;
        }
        .twitter {
          background-image: url(../../static/images/homeSpriteNewFinal.png);
          background-position: -184px -157px;
          width: 28px;
          height: 32px;
        }

        .linkedin {
          background-image: url(../../static/images/homeSpriteNewFinal.png);
          background-position: -71px -91px;
          width: 30px;
          height: 34px;
        }

        a {
          background-repeat: no-repeat;
          text-align: center;
          display: inline-block;
          margin: 10px 10px 0px 0px;
        }
      `}</style>
    </div>
  );
}

export default Footer;
