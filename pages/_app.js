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
          body {
            margin: 0px;
            font-family: "Roboto Light, Arial, sans-serif, Helvetica Neue",
              Helvetica;
          }
          h1,
          h2,
          h3,
          h4,
          h5 {
            margin: 0px;
          }
          .fontreg {
            font-family: "Roboto", "sans-serif";
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
        `}</style>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
