import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const themePalette = createTheme({
  palette: {
    primary: {
      main: 'hsl(26, 100%, 55%)',
      light: 'hsl(25, 100%, 94%)'
    },
    secondary: {
      300: 'hsl(223, 64%, 98%)',
      A400: 'hsl(220, 14%, 75%)',
      500: 'hsl(219, 9%, 45%)',
      600: 'hsl(220, 13%, 13%)'
    },
    error: {
      main: red.A400
    }
  },
  
})

// Create a theme instance.
const theme = createTheme({
  ...themePalette,
  typography: {
    fontSize: 16,
    fontFamily: 'Kumbh Sans, sans-serif',
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontWeight: 'bold',
      fontSize: '3.5rem'
    },
    body1: {
      fontSize: 20
    },
    subtitle1: {
      color: themePalette.palette.primary.main,
      textTransform: 'uppercase',
      fontWeight: 'bold'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536
    }
  }
});

export default theme;
