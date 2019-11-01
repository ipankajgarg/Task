import React from "react";
import Slider from "react-slick";
import { simpleSteps } from "../../static/data";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

function SimpleSteps() {
  return (
    <div className="container">
      <h3>Three Simple Steps to</h3>
      <h2>
        Find the <strong>One for You</strong>
      </h2>
      <Slider {...settings}>
        {simpleSteps.map(function({ text, posiiton }, index) {
          return (
            <div className="list-container">
              <div
                className="image"
                style={{ backgroundPosition: posiiton }}
              ></div>
              <div className="text">
                <span>{`0${index + 1}`}</span>
                {text}
              </div>
            </div>
          );
        })}
      </Slider>
      <style jsx>{`
        .list-container {
          text-align: center;
          margin-top: 30px;
        }

        .container {
          padding: 32px 20px;
          background: #f8f9f9;
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
        h2 strong {
          padding: 0 0 0 5px;
          color: #d9475c;
        }

        .image {
          background: url("../../static/images/how_it_works.svg") no-repeat;
          width: 210px;
          height: 110px;
          display: inline-block;
        }

        .text {
          font-weight: 600;
          font-size: 14px;
          color: #14202b;
        }
        .text span {
          font-style: normal;
          color: #d9475c;
        }
        .slick-dot {
          background: #d9475c;
        }
      `}</style>
    </div>
  );
}

export default SimpleSteps;
