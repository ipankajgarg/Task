import React from "react";
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

function Home() {
  return (
    <>
      <Banner />
      <VerificationDetail />
      <SimpleSteps />
      <PrivacySetting />
      <MembershipPlans />
      <JSExclusive />
      <AboutApp />

      {/* <Caption /> */}

      <MatchProfiles />
      {/* <DownloadApp /> */}

      {/* <BrowseMatrimonyProfiles /> */}
      {/* <About /> */}
      <Footer />
    </>
  );
}

export default Home;
