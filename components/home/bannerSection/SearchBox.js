import React from "react";
//import { Input } from "antd";
import theme from "../../../static/theme";

//const { Search } = Input;

function SearchBox() {
  return (
    <div className="container">
      <div className="input-box">
        <span className="input-text">Search for Bride / Groom</span>
      </div>
      <div className="search-icon-container">
        <i className="search-icon"></i>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          height: 40px;
        }
        .input-box {
          flex-basis: 86%;
          background-color: white;
        }
        .search-icon-container {
          flex-basis: 14%;
          background-color: ${theme.primaryColor};
          line-height: 45px;
          text-align: center;
        }
        .input-text {
          line-height: 40px;
          color: #666666;
          opacity: 0.6;
          margin-left: 15px;
        }
        .search-icon {
          background-image: url("../../../static/images/homeSpriteNewFinal.png");
          background-repeat: no-repeat;
          width: 24px;
          background-position: -332px -101px;
          height: 16px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}

export default SearchBox;
