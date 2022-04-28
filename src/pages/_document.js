import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <script src="http://d3js.org/d3.v3.min.js" charSet="utf-8"></script>
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="Um83HmIhMJaTFy2CUiZPrlR_T36xG9KbqAbEwJgbDw8"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
