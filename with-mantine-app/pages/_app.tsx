import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, TypographyStylesProvider } from '@mantine/core';
import '@fontsource/gideon-roman';
import '@fontsource/noto-mono';
import '@fontsource/noto-sans-jp';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Noto Mono, monospace',
          headings: {
            fontFamily: 'Gideon Roman, sans-serif'
          },
          colorScheme: 'light'
        }}
      >
        <TypographyStylesProvider>
          <Component {...pageProps} />
        </TypographyStylesProvider>
      </MantineProvider>
    </>
  );
}
