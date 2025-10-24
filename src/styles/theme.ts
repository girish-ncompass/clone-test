import { createTheme, type Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#b64f79",
    },
    secondary: {
      main: "#0a1d2c",

    },

    text:{
      primary:"#fff",
      secondary:"#0a1d2c"
    },
    error: {
      main: "#d32f2f",
    },
    background: {
      default: "#0b151d",
      paper: "#ffffff",
    },
  },
  typography:{
    h6:{
      fontWeight:"lighter",
      fontSize:"12px"
    }
  }
});

export default theme;
