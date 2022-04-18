import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import '@fontsource/spartan';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  // https://stackoverflow.com/questions/71809903/next-js-component-cannot-be-used-as-a-jsx-component
  const AnyComponent = Component as any;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Spartan, sans-serif',
          colorScheme: 'light',
          colors: {
            brand: ['hsl(0, 0%, 0%)', 'hsl(0, 0%, 27%)', 'hsl(0, 0%, 63%)', 'hsl(0, 0%, 100%)'],
          },
          primaryColor: 'brand'
        }}
      >
          <AnyComponent {...pageProps} />
      </MantineProvider>
    </>
  );
}
