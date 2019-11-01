import React from "react";
import Header from "./Header";
import SearchBox from "./SearchBox";

function Banner() {
  return (
    <div className="banner-image">
      <div>
        <Header />
        <div className="white fontreg caption">
          <p>Love is looking for you</p>
          <h1> Be found</h1>
        </div>
        {/* <SearchBox /> */}
      </div>
      <style jsx>{`
        .banner-image {
          background: url(../../../static/images/cover_picture.jpg) left top
            no-repeat;
          background-size: cover;
          min-height: 360px;
        }

        .caption {
          font-size: 16px;
          margin-top: 150px;
          margin-bottom: 8px;
          text-align: center;
        }
        p {
          font-size: 14px;
          text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
        }
        h1 {
          font-size: 70px;
          font-family: "sarah-script", "sans-serif";
          font-weight: 400;
          margin: 0px;
        }
      `}</style>
    </div>
  );
}

export default Banner;
