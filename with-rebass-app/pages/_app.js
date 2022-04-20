import { ThemeProvider } from 'styled-components';
import '@fontsource/barlow';
import '@fontsource/fraunces/900.css';
import '@fontsource/fraunces/700.css';

const theme = {
  breakpoints: ['375px', '1440px'],
  colors: {
    red: 'hsl(7 99 70)',
    yellow: 'hsl(51 100 49)',
    blue: 'hsl(198 62 26)',
    desaturatedCyan: 'hsl(51 100 49)',
    cyan: 'hsl(168 34 41)',
    neutral: [
      'hsl(212, 27%, 19%)',
      'hsl(213, 9%, 39%)',
      'hsl(232, 10%, 55%)',
      'hsl(210, 4%, 67%)',
      'hsl(0, 0%, 100%)'
    ]
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  fonts: {
    body: 'Barlow, sans-serif',
    heading: 'Fraunces, serif',
  },
  fontWeights: {
    body: 600,
    heading: 700,
    title: 900,
  },
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
