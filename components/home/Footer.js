import React, { useState } from "react";

function Footer() {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="container footer">
      <div className="logo-title">
        <img src="https://www.jeevansathi.com/images/jsms/photo/js_footer_logo.png" />
        <div>
          <cite>Jeevansathi</cite>

          <span>Be found</span>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <p>
          Jeevansathi.com is one of the leading and most trusted matrimony
          websites in India. Making happy marriages happen since 1998,
          Jeevansathi understands the importance of choosing the right partner
          for marriage, especially in the Indian cultural setup. It believes in
          providing the most secure and convenient matchmaking experience to all
          its members by ensuring 100% screening exclusive privacy options,
          photo protection features and verification of phone numbers and more
          information. While the online matrimonial site connects millions of
          people directly, Jeevansathi also maintains a dedicated Customer Care
          team and offers offline Match Point Centers across the country, for
          deeper and personal interaction with prospective brides, grooms and/or
          families.
          <br />
          <span
            style={{ display: isVisible ? "inline" : "none", marginTop: 0 }}
          >
            Please note: Jeevansathi is only meant for users with a bonafide
            intent to enter into a matrimonial alliance and is not meant for
            users interested in dating only. Jeevansathi platform should not be
            used to post any obscene material, such actions may lead to
            permanent deletion of the profile used to upload such content.
          </span>
        </p>
        <div
          style={{
            position: "absolute",
            display: isVisible ? "none" : "block"
          }}
          className="view-more"
        >
          <span onClick={() => setVisible(true)}>View more</span>
        </div>
      </div>

      <div className="follow">
        <div>
          <span>Follow us on</span>
          <div>
            <a
              href="https://www.facebook.com/jeevansathi"
              className="facebook"
            ></a>
            <a
              href="https://www.twitter.com/jeevansathi"
              className="twitter"
            ></a>
            <a
              href="https://www.instagram.com/jeevansathi"
              className="instagram"
            ></a>
          </div>
        </div>
        <div className="shift-right">
          <span>App available on</span>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.jeevansathi.android"
              target="_blank"
              className="play-store"
            ></a>
            <a
              href="https://itunes.apple.com/in/app/jeevansathi/id969994186?mt=8"
              target="_blank"
              className="app-store"
            ></a>
          </div>
        </div>
      </div>
      <div className="toll-free">
        <span>Customer Service (Toll Free)</span>
        <b>1-800-419-6299</b>
      </div>

      <style jsx>{`
        .container {
          padding: 32px 24px;
          background: #34495e;
          color: white;
        }

        .logo-title {
          display: flex;
          align-items: center;
        }

        img {
          margin-right: 15px;
        }

        cite {
          font-size: 12px;
        }
        .logo-title span {
          font-size: 9px;
          color: #959499;
          display: block;
        }
        p {
          font-size: 14px;
          line-height: 23px;
          transition: height 0.3s ease;
        }

        a {
          background-image: url(https://static.jeevansathi.com/spa/dist/icons/FooterIconsSprite.svg);
          background-repeat: no-repeat;
          width: 17px;
          height: 17px;
          margin: 10px 10px 0px 0px;
          display: inline-block;
        }

        .view-more {
          bottom: 0;
          left: 0;
          text-align: center;
          width: 100%;
          color: #fff;
          min-height: 120px;
          background-image: linear-gradient(
            -180deg,
            rgba(52, 73, 94, 0) 0%,
            #34495e 74%
          );
        }

        .view-more span {
          position: absolute;
          bottom: 0;
          transform: translate(-50%, 0%);
        }

        .follow {
          display: flex;
        }
        .shift-right {
          margin-left: 70px;
        }

        .follow span {
          font-size: 12px;
          font-weight: 600;
        }

        .facebook {
          background-position: -90px -1px;
        }
        .twitter {
          background-position: -140px -1px;
        }
        .instagram {
          background-position: -116px -1px;
        }
        .play-store {
          background-position: -66px 0;
        }
        .app-store {
          background-position: -40px -1px;
        }
        .toll-free {
          font-size: 12px;
          margin-top: 20px;
        }
        .toll-free b {
          display: block;
          margin-top: 10px;
          font-size: 16px;
          font-weight: normal;
        }
      `}</style>
    </div>
  );
}

export default Footer;
