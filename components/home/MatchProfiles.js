import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const arr = [
  {
    imageURL: "../../static/images/nhm_img1.jpeg",
    text: "Abhinay weds Shalini"
  },
  { imageURL: "../../static/images/nhm_img2.jpeg", text: "Parul weds Vipin" },
  {
    imageURL: "../../static/images/nhm_img3.jpeg",
    text: "Khushbu weds Shah Jaini"
  },
  { imageURL: "../../static/images/nhm_img4.jpeg", text: "Nikita weds Keval" }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function MatchProfiles() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h3 className="fontreg">Matched By Jeevansathi</h3>

      <div className="carousel-container">
        <Carousel
          onChange={data => setCount(data)}
          showIndicators={false}
          showStatus={false}
          autoPlay={true}
          showThumbs={false}
          showArrows={true}
          infiniteLoop={true}
          selectedItem={count}
        >
          {arr.map(function(profile) {
            return (
              <div>
                <img src={profile.imageURL} />
              </div>
            );
          })}
        </Carousel>
        <p className="fontreg">{arr[count].text}</p>
      </div>

      <style jsx>{`
        .container {
          padding: 30px 0px 40px 0px;
          text-align: center;
        }
        h3 {
          color: #34495e;
          font-size: 20px;
          margin: 0px;
          margin-bottom: 50px;
        }
        .carousel-container {
          padding: 0px 30px;
        }
        .slide {
          background-color: white;
        }
      `}</style>
    </div>
  );
}

export default MatchProfiles;
