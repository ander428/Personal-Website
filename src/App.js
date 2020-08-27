import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { defaultTheme } from "./utils/Themes/Default";
import Routes from "./components/Routes/Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={defaultTheme}>
          <header className="App-header">
            <Router>
                <Routes />
            </Router>
          </header>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
