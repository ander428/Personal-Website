import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./NavBar.css";
import { constants } from "../../utils/constants";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <nav>
      <ul>
        {constants.MENU.map(tab => (
          <li key={tab.id}>
            {tab.title === "Resume" ? (
              <a href={tab.url}>{tab.title}</a>
            ) : (
              <Link to={tab.url}>{tab.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
