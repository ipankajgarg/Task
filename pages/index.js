import React from "react";
import Head from "next/head";
import BannerSection from "../components/home/bannerSection/Banner";
import Home from "../components/home/Home";



// console.log("env",process.env.BASE_URL)

export default function() {
  
  return <div>
    
    <Head>
        <title>Matrimony, Marriage, Free Matrimonial Sites, Match Making</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Most trusted Indian matrimony site. 10Lac+ Profiles, 3-level profile check, Search by caste and community, Privacy control &amp; Register FREE! ‘Be Found’ Now"></meta>
        <meta name="author" content="https://www.jeevansathi.com"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
        <link rel="canonical" href="https://www.jeevansathi.com/"></link>
        <link rel="icon" href="../static/images/apple-touch-icon-72x72_new.png"></link>
      </Head>
    <Home />
    </div>;
}
