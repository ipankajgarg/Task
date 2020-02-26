import React from "react";
import Slider from "react-slick";
import { simpleSteps } from "../../static/data";
import Button from "../common/Button";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

function SimpleSteps(props) {
  return (
    <div className="container simple-steps">
      <h3>Three Simple Steps to</h3>
      <h2>
        Find the <strong>One for You</strong>
      </h2>
      <Slider {...settings}>
        {simpleSteps.map(function({ text, posiiton }, index) {
          return (
            <div key={text} className="list-container">
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
      <a onClick={() =>{
        props.trackRegistrationGA("register steps")
window.location.href ="/profile/registration_new.php?source=home_step"
      }}>
        <div className="button-container">
          <button> Get Started by Registering Free</button>
        </div>
      </a>

      <style jsx>{`
        .list-container {
          text-align: center;
          margin-top: 30px;
        }

        .container {
          padding: 32px 20px;
          background: #f8f9f9;
          position: relative;
        }

        h3 {
          font-size: 12px;
          font-weight: 700;
          color: #8a9db0;
          margin-bottom: 4px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
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
          background: url("https://static.jeevansathi.com/spa/dist/icons/How_it_works.svg") no-repeat;
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
        .button-container{
          position: absolute;
          bottom: 70px;
          width: 100%;
          left: 0;
          display: flex;
          justify-content: center;
          padding: 0 20px;
          box-sizing: border-box;
      }
        }
        button {
          width:100%;
          padding:10px 20px;
          font-size: 14px;
          color: #fff;
          letter-spacing: 0;
          /* padding: 10px 20px; */
          background: #d9475c;
          display: inline-block;
          font-weight: 600;
          vertical-align: middle;
          user-select: none;
          border: 1px solid transparent;
          line-height: 1.5;
          border-radius: 0.25rem;
          font-family: "Cabin", sans-serif;
        }
      `}</style>
    </div>
  );
}

export default SimpleSteps;
