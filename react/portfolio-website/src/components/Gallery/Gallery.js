import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Panel from "./Panel";

const styles = {
  root: {
    boxShadow: "5px 10px 18px #888888"
  },
  panels: {
    minHeight: "50vh",
    minWidth: "100vw",
    overflow: "hidden",
    display: "flex"
  }
};

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.panels}>
        {this.state.data.map((item, i) => (
          <Panel img={item.image} key={i} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Gallery);
