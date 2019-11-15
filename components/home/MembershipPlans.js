import React from "react";
import Slider from "react-slick";
//import MembershipDetail from "./OldMembershipDetail";
import { membershipDetail } from "../../static/data";
import Icon from "../../static/svgHandler";

const settings = {
  dots: false,
  swipe: true,
  touchMove: true,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 1.25,
  slidesToScroll: 0.5,
  centerMode: true,
  centerPadding: "4px"
};

function MembershipPlans() {
  return (
    <div className="container">
      <div className="heading">
        <h3>Upgrade your account</h3>

        <strong>
          Membership <span> Plans</span>{" "}
        </strong>
      </div>

      <div className="slider" {...settings}>
        {membershipDetail.map(function(
          {
            iconColor,
            list,
            backgroundColor,
            buttonTextColor,
            textColor,
            title,
            borderColor,
            buttonText,
            buttonColor,
            link
          },
          index
        ) {
          return (
            <div style={{ backgroundColor }} className="card">
              <span
                className="card-heading"
                style={{ color: textColor, borderColor }}
              >
                {title}
              </span>

              {list.map(function({
                text,
                iconColor,
                textColor,
                iconStyle,
                iconType
              }) {
                return (
                  <div style={{ height: 34 }}>
                    {/* <span style={{ color: iconColor }}>icon</span> */}
                    <Icon type={iconType} css={iconStyle} />
                    <span className="text" style={{ color: textColor }}>
                      {text}
                    </span>
                  </div>
                );
              })}

              <div style={{ textAlign: "center" }}>
                <a href={link}>
                  <button
                    style={{
                      backgroundColor: buttonColor,
                      color: buttonTextColor
                    }}
                  >
                    {buttonText}
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .container {
          padding: 42px 0px;
          background-image: url("../../static/images/people_together_back.jpg");
          background-repeat-x: repeat;
          background-position: left bottom;
          background-size: contain;
        }

        .slider {
          display: flex;
          overflow-x: scroll;
          padding: 0px 24px;
          margin-top: 20px;
          width: 600px;
        }
        .heading {
          padding: 0px 24px;
        }

        h3 {
          font-size: 12px;
          font-weight: 700;
          color: #8a9db0;
          margin-bottom: 4px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        span {
          color: black;
        }
        strong {
          font-size: 20px;
          color: #d9475c;
        }

        .card {
          box-shadow: 0 2px 6px -1px rgba(38, 48, 140, 0.2);
          border-radius: 4px;
          margin-right: 15px;
          padding: 24px;
          // min-width: 70%;
        }

        .text {
          font-size: 13px;
          font-weight: 500;
          padding-left: 8px;
        }

        .card-heading {
          font-size: 20px;
          color: #14202b;
          font-weight: 500;
          border-top: 2px solid;
          padding: 0.5rem 0rem;
          display: inline-block;
        }

        button {
          font-size: 14px;
          // color: #fff;
          letter-spacing: 0;
          padding: 10px 20px;
          margin: 0 0 0 -60px;
          left: 50%;
          bottom: 30px;
          // background: #d9475c;
          display: inline-block;
          font-weight: 600;
          vertical-align: middle;
          user-select: none;
          border: 1px solid transparent;
          line-height: 1.5;
          border-radius: 0.25rem;
          font-family: "Cabin", sans-serif;
          /* width: 100%; */
          font-weight: 700;
          color: #fff;
          line-height: 14px;
          margin: auto !important;
          width: 100% !important;
        }
      `}</style>
    </div>
  );
}

export default MembershipPlans;
