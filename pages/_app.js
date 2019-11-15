import App from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />

        <style global jsx>{`
          body  {
            margin: 0px;
            font-family: "Cabin", sans-serif;
          }
          h1,
          h2,
          h3,
          h4,
          h5 {
            margin: 0px;
          }
          .fontreg {
            font-family: "Cabin", sans-serif;
          }
            font-weight: 400;
          }
          .white {
            color: white;
          }

          ul {
            margin: 0px;
            padding: 0px;
            list-style: none;
          }

          .simple-steps .slick-dots {
            bottom: -100px;
          }
          .simple-steps .slick-list {
            margin-bottom: 100px;
          }
          .simple-steps .slick-dots li button {
            display: none;
          }

          .simple-steps .slick-dots li {
            border-radius: 50%;
            width: 8px;
            height: 8px;
            background: #dbdee3;
          }
          .simple-steps .slick-dots .slick-active {
            background: #d9475c;
          }
          a {
            color: white;
            text-decoration: none;
          }
        `}</style>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
