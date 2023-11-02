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
      <script async src="http://192.168.0.224:3956/script.js" data-website-id="54951c09-f30b-44b1-9af4-a08ab3dce7d0"></script>
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
