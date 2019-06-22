import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./Panel.styles";

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
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
      <li
        className={classes.item}
        style={{ backgroundImage: `url(${this.props.image})` }}
      >
        <div className={classes.panel}>
          <a href={this.props.link} className={classes.link}>
            <div className={classes.element}>{this.props.name}</div>
          </a>
        </div>
      </li>
    );
  }
}

export default withStyles(styles)(Panel);
