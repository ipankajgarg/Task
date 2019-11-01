import React, { Component } from "react";
import Slider from "react-slick";

//TODO get this data through api call

const arr = [
  {
    FRAME_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
    HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
    IS_EXCLUSIVE: "0",
    MAIN_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
    NAME1: "Sandeep Singh Bindra",
    NAME2: "Gaganpreet Kaur",
    SID: "8265",
    SQUARE_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
    STORY:
      "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
    STORYID: "17741",
    YEAR: "2018",
    combinedName: "Sandeep & Gaganpreet",
    marriageDate: "21, August 2018"
  },
  {
    FRAME_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
    HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
    IS_EXCLUSIVE: "0",
    MAIN_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
    NAME1: "Sandeep Singh Bindra",
    NAME2: "Gaganpreet Kaur",
    SID: "8265",
    SQUARE_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
    STORY:
      "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
    STORYID: "17741",
    YEAR: "2018",
    combinedName: "Sandeep & Gaganpreet",
    marriageDate: "21, August 2018"
  },
  {
    FRAME_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
    HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
    IS_EXCLUSIVE: "0",
    MAIN_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
    NAME1: "Sandeep Singh Bindra",
    NAME2: "Gaganpreet Kaur",
    SID: "8265",
    SQUARE_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
    STORY:
      "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
    STORYID: "17741",
    YEAR: "2018",
    combinedName: "Sandeep & Gaganpreet",
    marriageDate: "21, August 2018"
  },
  {
    FRAME_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
    HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
    IS_EXCLUSIVE: "0",
    MAIN_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
    NAME1: "Sandeep Singh Bindra",
    NAME2: "Gaganpreet Kaur",
    SID: "8265",
    SQUARE_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
    STORY:
      "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
    STORYID: "17741",
    YEAR: "2018",
    combinedName: "Sandeep & Gaganpreet",
    marriageDate: "21, August 2018"
  },
  {
    FRAME_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
    HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
    IS_EXCLUSIVE: "0",
    MAIN_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
    NAME1: "Sandeep Singh Bindra",
    NAME2: "Gaganpreet Kaur",
    SID: "8265",
    SQUARE_PIC_URL:
      "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
    STORY:
      "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
    STORYID: "17741",
    YEAR: "2018",
    combinedName: "Sandeep & Gaganpreet",
    marriageDate: "21, August 2018"
  }
];

class MatchProfiles extends Component {
  state = { profiles: arr };
  render() {
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

    const { profiles } = this.state;
    console.log(profiles);

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
            );
          })}
        </Slider>
        <style jsx>{`
          .container {
            padding: 32px 24px;
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
            font-size: 23px;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.27);
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
}

export default MatchProfiles;
