import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#fff",
      dark: "#fff",
      contrastText: "#fff",
    },
    secondary: {
      light: "#2f90ef",
      main: "#2f90ef",
      dark: "#4080bf",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "#fff",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
      divider: "rgba(0, 0, 0, 0.12)",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: "0.04",
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: "0.08",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: "0.38",
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: "0.12",
      activatedOpacity: "0.12",
    },
  },
  typography: {
    htmlFontSize: "16",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: "14",
    fontWeightLight: "300",
    fontWeightRegular: "400",
    fontWeightMedium: "500",
    fontWeightBold: "700",
    h1: {
      fontWeight: "300",
      fontSize: "6rem",
    },
    h2: {
      fontWeight: "300",
      fontSize: "3.75rem",
      lineHeight: "1.2",
    },
    h3: {
      fontWeight: "400",
      fontSize: "3rem",
      lineHeight: "1.167",
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: "400",
      fontSize: "2.125rem",
      lineHeight: "1.235",
      letterSpacing: "0.00735em",
    },
  },
});

export default theme;
