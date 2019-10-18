import React from "react";
import Header from "./Header";
import SearchBox from "./SearchBox";

function Banner() {
  return (
    <div className="banner-image">
      <div style={{ padding: "15px 20px" }}>
        <Header />
        <div className="white fontreg caption">
          Love is looking for you. Be found.
        </div>
        <SearchBox />
      </div>
      <style jsx>{`
        .banner-image {
          background: url("../../../static/images/header-banner.jpg") no-repeat
            center center #dbdbdb;
          background-size: cover;
          height: 300px;
          width: 100%;
        }

        .caption {
          font-size: 16px;
          margin-top: 150px;
          margin-bottom: 8px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Banner;
