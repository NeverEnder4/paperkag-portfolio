import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* pwa tags */}
          <link rel="manifest" href="/static/public/manifest.json" />

          <meta
            name="description"
            content="The official portfolio of Kenyata Furious Barnette. PaperKag - Art, Animation, Skateboarding and Modeling - Killing Art Galleries World Wide!"
          />
          <meta
            name="keywords"
            content="paperkag, Kenyatta Furious Barnette, YO, paperkag la, Kenyatta Barnette, animator, painter, artist"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/public/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/public/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/public/favicon-16x16.png"
          />
          <link rel="manifest" href="%PUBLIC_URI%/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/public/safari-pinned-tab.svg"
            color="#1d1d1d"
          />
          <meta name="msapplication-TileColor" content="#1d1d1d" />
          <meta name="theme-color" content="#1d1d1d" />
          {/* google site verification */}
          <meta
            name="google-site-verification"
            content="vEU9ahHwZqaqcbm_EQb7JfOM_IMv9S1WBFS3yfyVE2U"
          />
          {/* google fonts link */}
          <link
            href="https://fonts.googleapis.com/css?family=Baloo+Thambi"
            rel="stylesheet"
          />
          {/* canonical url */}
          <link rel="canonical" href="http://www.paperkag.com/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
