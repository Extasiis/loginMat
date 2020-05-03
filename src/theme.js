import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    common:{
        white: "#fff"
    },

    primary: {
        light: "#fff",
        main: "#fff",
        dark: "#fff",
        contrastText: "#fff"
    },
    secondary: {
        light: "#fff",
        main: "#2f90ef",
        dark: "#4080bf",
        contrastText: "#fff"
    },
    success: {
        light: "#fff",
        main: "#fff",        
        contrastText: "#fff"
    },
    text: {
        primary: "#fff",
        secondary: "#fff",
        disabled: "#fff",
        hint: "#fff",
        divider: "#fff"
      }
  },
  
});

export default theme;