'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(210, 63, 87)",
      light: "rgb(210, 63, 87)",
      dark: "rgb(210, 63, 87)",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "rgb(0, 0, 0)",
      light: "rgb(0, 0, 0)",
      dark: "rgb(0, 0, 0)",
      contrastText: "#ffffff"
    },
  },
  typography: {
    fontFamily: 'var(--font-public)',
  },
});

export default theme;