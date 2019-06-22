import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Panel from "./Panel";
import styles from "./Gallery.styles";

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
        {/*<ul className={classes.list}>*/}
        {this.state.data.map((item, i) => (
          <Panel {...item} key={i} />
        ))}
        {/*</ul>*/}
      </div>
    );
  }
}

export default withStyles(styles)(Gallery);
