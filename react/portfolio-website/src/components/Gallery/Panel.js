import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  panel: {
    boxShadow: theme.shadow.inset,
    textAlign: "center",
    alignItems: "center",
    transition: theme.transition.flex,
    fontSize: "20px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    flex: 1,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column"
  }
});

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
      <div
        className={classes.panel}
        style={{ backgroundImage: `url(${this.props.img})` }}
      />
    );
  }
}

export default withStyles(styles)(Panel);
