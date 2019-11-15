import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

//TODO get this data through api call

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

function MatchProfiles() {
  var [profiles, setProfiles] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(
        "https://www.jeevansathi.com/successStory/filter?sourceType=homepage&sourceValue=homepage&fromSPA=1"
      );
      console.log("res", response);
      setProfiles(response.data.result);
    } catch (err) {}
  }, []);

  return (
    <div className="container">
      <div className="heading">
        <h3>Lakhs of Couples</h3>

        <span>
          Matched by <strong> Jeevansathi</strong>
        </span>
      </div>
      <Slider {...settings}>
        {profiles.map(function(profile) {
          return (
            <a
              style={{ display: "block" }}
              href={`story?year=${profile.YEAR}&SID=${profile.SID}`}
            >
              <div className="profile">
                <div
                  className="image"
                  style={{
                    backgroundImage: `linear-gradient(transparent 0%, rgba(0,0,0,1) 120%),url(${profile.SQUARE_PIC_URL})`
                  }}
                >
                  <div className="text">
                    <h2>{profile.combinedName}</h2>
                    <div className="border"></div>
                    <span>`MARRIED SINCE ${profile.marriageDate}`</span>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </Slider>
      <style jsx>{`
        .container {
          padding: 32px 0px 32px 24px;
        }

        .profile {
          margin-top: 20px;
        }

        .image {
          width: 98%;
          height: 228px;
          margin-left: 0;
          border-radius: 8px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center top;
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
        span {
          font-size: 20px;
        }
        strong {
          color: #d9475c;
        }

        .text {
          position: absolute;
          bottom: 50px;
          color: white;
          text-align: center;
          width: 100%;
        }
        .text h2 {
          font-size: 40px;
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.27);
          font-family: "sarah-script", "sans-serif";
          font-weight: lighter;
        }

        .text span {
          font-size: 11px;
          color: #fff;
          letter-spacing: 1.15px;
          text-align: center;
          padding-bottom: 16px;
          padding-top: 8px;
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.24);
        }

        .border {
          border-bottom: 1px solid #fff;
          width: 80%;
          margin: 15px auto 5px auto;
        }
      `}</style>
    </div>
  );
}

export default MatchProfiles;
