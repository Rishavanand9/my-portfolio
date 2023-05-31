import { createTheme } from "@mui/material/styles";
import { grey, teal, lime } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[900],
    },
    secondary: {
      main: lime[200],
    },
    background: {
      default: grey[200],
    },
    text: {
      primary: "black",
      secondary: teal[100],
    },
  },
  typography: {
    fontFamily: "monospace",
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h1: {
      fontSize: "48px",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "monospace",
      fontSize: "24px",
      fontWeight: 500,
      color: lime[200],
    },
    subtitle: {
      fontFamily: "monospace",
      fontSize: "16px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "14px",
      fontWeight: 300,
    },
  },
});

export default theme;
