import React from "react";

function Footer() {
  return (
    <div className="container">
      <div>
        <span className="white">Follow us on</span>
        <br />
        <a>
          {" "}
          <i></i>
        </a>
        <a>
          {" "}
          <i></i>
        </a>
        <a>
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
      `}</style>
    </div>
  );
}

export default Footer;
