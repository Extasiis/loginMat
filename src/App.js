import React from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"

import Login from "./components/Login"
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <Route exact path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
