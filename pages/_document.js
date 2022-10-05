import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
        <Html lang="en">
            <Head>
                
                {/* Roboto, Great Vibes, Quicksand Font */}

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand&family=Sacramento&display=swap" rel="stylesheet" />
               
                {/* Core UI Icons */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />

                {/* Material Icons */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

                {/* Favicons */}
                <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
                <link rel="manifest" href="images/site.webmanifest" />
                <link rel="icon" href="images/favicon.ico" />

            </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html> 
    )
  }
}

export default MyDocument