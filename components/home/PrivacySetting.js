import React from "react";
import { privacySetting } from "../../static/data";

function PrivacySetting() {
  return (
    <div className="container">
      <img
        className="privacy"
        src="../../static/images/privacy_Illustration.svg"
      />

      <div>
        <h3>Complete Control over your Privacy Settings</h3>
        <ul>
          {privacySetting.map(function({ imgURL, text }) {
            return (
              <li>
                <img style={{ marginRight: 20 }} src={imgURL} />
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <style jsx>{`
        .container {
          padding: 32px 24px;
          background-color: #d9475c;
          color: white;
        }

        .privacy {
          margin: 0px auto;
          display: block;
        }
        h3 {
          margin: 20px 0px;
        }

        li {
          display: inline-flex;
          align-items: center;
          font-size: 16px;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
}

export default PrivacySetting;
