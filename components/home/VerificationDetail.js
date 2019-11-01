import React from "react";
import { verificationData } from "../../static/data";

function VerificationDetail() {
  return (
    <div className="container">
      <h3>More Than 20 years of</h3>
      <h2>
        Bringing People<span>Together</span>
      </h2>

      <div style={{}}>
        {verificationData.map(function(data) {
          return (
            <div className="list-container">
              <div>
                <img
                  style={{ padding: "0px 10px 0px 0px" }}
                  src={data.imageURL}
                />
              </div>
              <div className="content">
                <h4>{data.heading}</h4>
                <p>{data.about}</p>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          font-family: "Cabin", sans-serif;
          margin: 32px 20px;
        }

        h3 {
          font-size: 12px;
          font-weight: 700;
          color: #8a9db0;
          margin-bottom: 4px;
          letter-spacing: 1.5px;
        }

        h2 {
          font-size: 20px;
          font-weight: 100;
        }

        span {
          padding: 0 0 0 5px;
          color: #d9475c;
        }

        .list-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px 0px;
        }
        .content {
          padding: 0px 0px 0px 10px;
          border-left: 1px solid #dee2e6;
        }
        h4 {
          font-size: 14px;
          color: #14202b;
          font-weight: 600;

          padding: 0px;
        }
        p {
          font-size: 12px;
          color: #33495f;
          line-height: 17px;
          margin: 0px;
          padding: 0px;
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
}

export default VerificationDetail;
