import React, { useEffect, useState } from "react";
import Banner from "./bannerSection/Banner";
import Caption from "./Caption";
import MembershipPlans from "./MembershipPlans";
import MatchProfiles from "./MatchProfiles";
import DownloadApp from "./DownloadApp";
import About from "./About";
import Footer from "./Footer";
import BrowseMatrimonyProfiles from "./BrowseMatrimonyProfiles";
import VerificationDetail from "./VerificationDetail";
import SimpleSteps from "./SimpleSteps";
import PrivacySetting from "./PrivacySetting";
import JSExclusive from "./JSExclusive";
import AboutApp from "./AboutApp";
import Community from "./Community";
import Icon from "../../static/svgHandler";

let iStyle = {
  height: "22px",
  verticalAlign: "middle",
  width: "22px",
  color: "#fff"
};

function Home() {
  const [imagesLoadingAfterScroll, changeLoading] = useState(false);
  var imagesCalled = false;

  function isAnyPartOfElementInViewport(el) {
    let rect = document.getElementsByClassName(el)[0].getBoundingClientRect();
    let windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    let windowWidth = window.innerWidth || document.documentElement.clientWidth;
    let vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    let horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
    return vertInView && horInView;
  }

  function handlePageScroll() {
    let headerContainer = document.getElementById("headerContainer");
    let floatDivBtn = document.getElementById("floatDivBtn");
    if (window.scrollY > 350) {
      headerContainer.classList.add("headerBg2");
      floatDivBtn.classList.add("bottom20");
      if (!imagesCalled) {
        changeLoading(true);
        imagesCalled = true;
      }
    } else {
      headerContainer.classList.remove("headerBg2");
      floatDivBtn.classList.remove("bottom20");
    }
    if (isAnyPartOfElementInViewport("footer")) {
      floatDivBtn.classList.remove("bottom20");
    }
  }

  function debounce(func, delay) {
    var inDebounce;
    return function() {
      // const context = this;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func(), delay);
    };
  }

  useEffect(() => {
    var scHandler = debounce(handlePageScroll, 50);
    window.addEventListener("scroll", scHandler, true);
  }, []);

  return (
    <>
      <div className="w-100 regFloatBtn" id="floatDivBtn">
        <div
          className="d-flex align-items-center floatDiv"
          onClick={e => {
            // this.GAObject.gaTrack(
            //   "",
            //   "jsms",
            //   "Homepage_R",
            //   "registration floater "
            // );
            window.location.href =
              "/profile/registration_new.php?source=home_float";
          }}
        >
          <span>Register Free</span>
          <span className="nMargin">
            <Icon type={"chevron_right"} css={iStyle} />
          </span>
        </div>
      </div>
      <Banner />
      <VerificationDetail />
      <SimpleSteps />
      <PrivacySetting />
      <MembershipPlans />
      <JSExclusive />
      <MatchProfiles />
      <AboutApp />

      <Community />
      <Footer />
      <style jsx>{`
        div {
          outline: 0;
        }
        div:focus {
          outline: 0;
        }
        .d-flex {
          display: flex !important;
          margin: 0 auto;
          justify-content: space-around;
        }
        .align-items-center {
          align-items: center !important;
        }
        .w-100 {
          width: 100% !important;
        }
        .floatDiv {
          background: rgb(217, 71, 92);
          color: rgb(255, 255, 255);
          padding: 8px;
          border-radius: 24px;
          line-height: 25px;
          font-size: 14px;
          font-weight: 600;
          width: 142px;
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
        }
        .regFloatBtn {
          position: fixed;
          bottom: -80px;
          z-index: 10;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .bottom20 {
          bottom: 20px;
        }
        .nMargin {
          margin: 0 0 1px -10px;
        }
      `}</style>
    </>
  );
}

export default Home;
