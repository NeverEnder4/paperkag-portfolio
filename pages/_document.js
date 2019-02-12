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
          <link rel="manifest" href="/static/public/manifest.json" />

          <meta
            name="description"
            content="The official portfolio of Kenyata Barnes."
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
          <link
            href="https://fonts.googleapis.com/css?family=Baloo+Thambi"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
