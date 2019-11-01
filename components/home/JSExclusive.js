import React from "react";
import { exclusiveList } from "../../static/data";

function JSExclusive() {
  return (
    <div className="container">
      <div>
        <h3>Personalised Match-Making Service</h3>

        <span>
          Introducing <strong> JS Exclusive</strong>{" "}
        </span>
      </div>
      <div>
        <img className="exclusive" src="../../static/images/exclusive.png" />
      </div>

      <div>
        <ul>
          {exclusiveList.map(function({ imgURL, text }) {
            return (
              <li>
                <img src={imgURL} />
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <style jsx>{`
        .container {
          padding: 32px 24px;
        }

        h3 {
          font-size: 12px;
          font-weight: 700;
          color: #8a9db0;
          margin-bottom: 4px;
          letter-spacing: 1.5px;
        }
        span {
          font-size: 20px;
        }
        strong {
          color: #d9475c;
        }

        .exclusive {
          width: 100%;
          margin: 20px 0;
          max-height: 190px;
        }

        li {
          display: inline-flex;
          align-items: center;
          margin-bottom: 15px;
        }
        li img {
          margin-right: 10px;
        }
        li span {
          color: #14202b;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export default JSExclusive;
