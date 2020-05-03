import React from 'react';

import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'

import Login from './components/Login'
import Footer from './components/Footer'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
