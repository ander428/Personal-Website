import React, { Component } from "react";
import "./App.css";
import SideNavbar from "./components/SideNav/SideNav";
import ContactPage from "./containers/Contact/ContactPage";
import {
  HashRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import HomePage from "./containers/Home/HomePage";
import PortfolioPage from "./containers/Portfolio/PortfolioPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <SideNavbar />

              <Switch>
                <Route exact path="/" component={withRouter(HomePage)} />
                <Route
                  path="/portfolio"
                  component={withRouter(PortfolioPage)}
                />
                <Route path="/contact" component={withRouter(ContactPage)} />
              </Switch>
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
