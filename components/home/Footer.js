import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="logo-title">
        <img src="../../static/images/js_footer_logo.png" />
        <div>
          <cite>Jeevansathi</cite>

          <span>Be found</span>
        </div>
      </div>

      <p>
        Jeevansathi.com is one of the leading and most trusted matrimony
        websites in India. Making happy marriages happen since 1998, Jeevansathi
        understands the importance of choosing the right partner for marriage,
        especially in the Indian cultural setup. It believes in providing the
        most secure and convenient matchmaking experience to all its members by
        ensuring 100% screening exclusive privacy options, photo protection
        features and verification of phone numbers and more information. While
        the online matrimonial site connects millions of people directly,
        Jeevansathi also maintains a dedicated Customer Care team and offers
        offline Match Point Centers across the country, for deeper and personal
        interaction with prospective brides, grooms and/or families.
        <br />
        Please note: Jeevansathi is only meant for users with a bonafide intent
        to enter into a matrimonial alliance and is not meant for users
        interested in dating only. Jeevansathi platform should not be used to
        post any obscene material, such actions may lead to permanent deletion
        of the profile used to upload such content.
      </p>

      <div className="follow">
        <div>
          <span>Follow us on</span>
          <div>
            <a className="facebook"></a>
            <a className="twitter"></a>
            <a className="instagram"></a>
          </div>
        </div>
        <div className="shift-right">
          <span>App available on</span>
          <div>
            <a className="play-store"></a>
            <a className="app-store"></a>
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
        }

        a {
          background-image: url(../../static/images/footerIconsSprite.svg);
          background-repeat: no-repeat;
          width: 17px;
          height: 17px;
          margin: 10px 10px 0px 0px;
          display: inline-block;
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
          font-size: 12px;
          font-weight: normal;
        }
      `}</style>
    </div>
  );
}

export default Footer;
