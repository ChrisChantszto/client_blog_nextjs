import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Script from 'next/script';
import { theme } from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Play Eat Easy - 玩食易</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/homepage.svg" />
      </Head>
      <Script
        src="//anymind360.com/js/7639/ats.js"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
