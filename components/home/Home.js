import React from "react";
import Banner from "./bannerSection/Banner";
import Caption from "./Caption";
import MembershipDetail from "./MembershipDetail";
import MatchProfiles from "./MatchProfiles";
import DownloadApp from "./DownloadApp";
import About from "./About";
import Footer from "./Footer";
import BrowseMatrimonyProfiles from "./BrowseMatrimonyProfiles";

function Home() {
  return (
    <>
      <Banner />
      <Caption />
      <MembershipDetail />
      <MatchProfiles />
      <DownloadApp />

      <BrowseMatrimonyProfiles />
      <About />
      <Footer />
    </>
  );
}

export default Home;
