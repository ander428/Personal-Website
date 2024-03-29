import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import HomePage from "../../containers/Home/HomePage";
import PortfolioPage from "../../containers/Portfolio/PortfolioPage";
import ContactPage from "../../containers/Contact/ContactPage";
import { Route, Switch, withRouter } from "react-router-dom";
import PublicationsPage from "../../containers/Publications/PublicationsPage";
import TeachingPage from "../../containers/Teaching/TeachingPage";

const Routes = props => {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            timeout={300}
            classNames="fade"
            key={location.pathname}
          >
            <Switch location={location}>
              <Route exact path="/" component={withRouter(HomePage)} />
              <Route path="/portfolio" component={withRouter(PortfolioPage)} />
              <Route path="/publications" component={withRouter(PublicationsPage)} />
              <Route path="/teaching" component={withRouter(TeachingPage)} />
              <Route path="/contact" component={withRouter(ContactPage)} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default Routes;
