import Document, { Html, Head, Main, NextScript, script } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"
          ></link>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://use.typekit.net/dsg7wdu.css"
          ></link>
          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Cabin:400,500,600,700"
          ></link> */}
          <script type="text/javascript" src="../static/font.js" />
          <script src="https://ssl.google-analytics.com/ga.js" />
    

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
