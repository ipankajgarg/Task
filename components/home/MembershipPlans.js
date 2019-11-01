import React from "react";
import Slider from "react-slick";
//import MembershipDetail from "./OldMembershipDetail";
import { membershipDetail } from "../../static/data";

const settings = {
  dots: false,
  swipe: true,
  touchMove: true,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 1.05,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "4px"
};

function MembershipPlans() {
  return (
    <div className="container">
      <Slider {...settings}>
        {membershipDetail.map(function(
          { iconColor, list, backgroundColor },
          index
        ) {
          return (
            <div>
              <div
                // style={{ paddingLeft: index == 0 ? 20 : 0 }}
                className="card"
              >
                {list.map(function({ text, iconColor, textColor }) {
                  return (
                    <div>
                      <span style={{ color: iconColor }}>icon</span>
                      <span style={{ color: textColor }}>{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Slider>

      <style jsx>{`
        .container {
          margin-left: 20px;
        }
        .card {
          background: #d9475c;
          box-shadow: 0 2px 6px -1px rgba(38, 48, 140, 0.2);
          border-radius: 4px;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
}

export default MembershipPlans;
