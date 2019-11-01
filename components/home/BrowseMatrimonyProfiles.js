import React from "react";
import { browseData } from "../../static/data";

function BrowseMatrimonyProfiles() {
  return (
    <div>
      <div className="container">
        {browseData.map(function(data, index) {
          return (
            <div
              className="list"
              style={{
                width: index % 2 == 0 ? "60%" : "40%",
                maxWidth: index % 2 == 0 ? "60%" : "40%",
                textAlign: "left"
              }}
            >
              <p>{data.title.display}</p>
              <ul>
                <li>
                  <a>{data.list[0].display}</a>
                </li>
                <li>
                  <a>{data.list[1].display}</a>
                </li>
              </ul>
            </div>
          );
        })}

        <style jsx>{`
          ul {
            padding: 0px;
            margin: 0px;
            list-style: none;
          }
          p {
            color: #666666;
            font-size: 13px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          li {
            color: #9b9b9b;
            font-size: 12px;
          }

          .container {
            display: flex;
            flex-wrap: wrap;
            margin: 0px 20px;
          }
          a {
            line-height: 3;
            text-overflow: ellipsis;
          }
        `}</style>
      </div>
    </div>
  );
}

export default BrowseMatrimonyProfiles;
