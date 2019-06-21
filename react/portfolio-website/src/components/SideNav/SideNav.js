import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles/index";
import classNames from "classnames";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import styles from "./SideNav.styles";
import { constants } from "../../utils/constants";
import { Link, NavLink } from "react-router-dom";

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <CssBaseline />

        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open
            })
          }}
          open={this.state.open}
        >
          {constants.MENU.map(tab => (
            <div key={tab.id}>
              <Link to={tab.url}>
                <IconButton>
                  {constants.ICONS.info}
                  <Typography>{tab.title}</Typography>
                </IconButton>
              </Link>
              <Divider />
            </div>
          ))}
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(SideNav);
