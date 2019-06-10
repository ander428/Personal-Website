import React, { Component } from "react";
import "./App.css";
import HomePage from "./containers/Home/HomePage";
import SideNavbar from "./components/SideNav/SideNav";
import PortfolioPage from "./containers/Portfolio/PortfolioPage";
import SocialMediaPage from "./containers/SocialMedia/SocialMediaPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SideNavbar />
          <SocialMediaPage />
        </header>
      </div>
    );
  }
}

export default App;
