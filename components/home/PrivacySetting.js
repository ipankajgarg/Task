import React from "react";
import { privacySetting } from "../../static/data";
import LazyLoad from 'react-lazyload';


function PrivacySetting() {
  return (
    <div className="container">
       <LazyLoad height={200}>
      <img
        className="privacy"
        src="https://www.jeevansathi.com/images/jsms/photo/Privacy%20Illustration.svg"
      />
      </LazyLoad>

      <div>
        <h3>Complete Control over your Privacy Settings</h3>
        <ul>
          {privacySetting.map(function({ imgURL, text }) {
            return (
              <li key={imgURL}>
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
