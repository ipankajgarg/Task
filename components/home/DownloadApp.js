import React from "react";
import theme from "../../static/theme";

function DownloadApp() {
  return (
    <div>
      <h2 className="fontreg">Download Jeevansathi APP</h2>
      <p className="fontreg">Best rated APP in online matrimony segment.</p>
      <img src="../../static/images/nhm_phoneImg.png" />
      <a className="fontreg">DOWNLOAD APP</a>

      <style jsx>{`
        div {
          text-align: center;
          padding: 30px;
          background-color: #e1e4e7;
        }

        h2 {
          color: #34495e;
          font-size: 20px;
          margin-bottom: 0px;
        }
        p {
          color: #666666;
          font-size: 15px;
          margin-top: 5px;
        }
        a {
          color: ${theme.primaryColor};
          text-decoration: none;
          font-size: 18px;
        }
        img {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default DownloadApp;
