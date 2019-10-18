import React from "react";
import theme from "../../static/theme";
import Button from "../common/Button";

const arr = [
  { text: "View Phone nos.", position: "-202px -76px" },
  { text: "Send Messages", position: "-153px -75px" },
  { text: "See Emails", position: "-175px 4px" },
  { text: "Chat Instantly", position: "-113px 8px" }
];

function MembershipDetail() {
  return (
    <div className="container">
      <p className="heading fontreg">
        Upgrade your Membership to contact people you like
      </p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {arr.map(function({ text, position }) {
          return (
            <div key={text} className="image-container">
              <div className="circle-img">
                <i
                  style={{ backgroundPosition: `${position}` }}
                  className="inner-image"
                ></i>
              </div>
              <p className="fontreg about">{text}</p>
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <Button
          width="279px"
          height="48px"
          content="BROWSE MEMBERSHIP PLANS"
          color={theme.primaryColor}
        />
        <p className="call-detail">
          To know more, call us @{" "}
          <span className="fontreg">1-800-419-6299</span>
        </p>
      </div>

      <style jsx>{`
        .container {
          padding: 35px 0px;
          background-color: #eaecee;
        }
        .heading {
          font-size: 20px;
          color: ${theme.secondaryColor};
          text-align: center;
          margin: 0px 40px 15px 40px;
        }
        .circle-img {
          background-image: url(../../static/images/homeSpriteNewFinal.png);
          background-repeat: no-repeat;
          background-position: -31px -6px;
          width: 69px;
          height: 69px;
          text-align: center;
          display: inline-block;
        }

        .inner-image {
          display: inline-block;
          width: 50px;

          height: 50px;
          background-image: url(../../static/images/homeSpriteNewFinal.png);
          background-repeat: no-repeat;
        }
        .image-container {
          width: 50%;
          text-align: center;
          margin: 15px 0px;
        }

        .about {
          margin-top: 8px;
          color: #666666;
          font-size: 16px;
        }
        .button-container {
          text-align: center;
        }
        .call-detail {
          font-size: 13px;
          color: #666666;
          margin: 6px 0px 0px;
        }
      `}</style>
    </div>
  );
}

export default MembershipDetail;
