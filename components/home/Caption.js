import React from "react";
import theme from "../../static/theme";
import Button from "../common/Button";

function Caption() {
  return (
    <div className="container white ">
      <h3 style={{ marginTop: 0 }} className="fontreg">
        The one you are perfect for, is waiting for you to log on.
      </h3>

      <p>100% Screening of profiles,</p>
      <p>Verified Stamp on those we've met in person</p>

      <p>Advanced Privacy Settings.</p>
      <div style={{ marginTop: 17 }}>
        <Button
          content="REGISTER FREE"
          onPress={() => console.log("my passed function")}
          width="192px"
          height="48px"
          color="#34495e"
        />
      </div>

      <style jsx>{`
        .container {
          background-color: ${theme.primaryColor};
          padding: 34px 30px;
          text-align: center;
        }
        p {
          margin: 0px;
          padding: 0px;
          line-height: 22px;
          font-size: 15px;
        }
        button {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}

export default Caption;
