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

  /* Definir el tercero
    success: {
        light: "#fff",
        main: "#fff",        
        contrastText: "#fff"
    },*/
    text: {
        primary: "#fff",
        secondary: "#fff",
        disabled: "#fff",
        hint: "#fff",
        divider: "#fff"
      }
  },
  root: {
    flexGrow: 1,
    
  },
  
});

export default theme;