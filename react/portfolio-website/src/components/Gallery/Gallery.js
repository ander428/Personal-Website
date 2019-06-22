import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Panel from "./Panel";
import styles from "./Gallery.styles";
import "./Gallery.css";
 

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={"accordion"} style={{filter: "grayscale(33%)"}}>
        <ul>
        {this.state.data.map((item, i) => (
          <Panel {...item} key={i} />
        ))}
        </ul >
      </div>
    );
  }
}

export default withStyles(styles)(Gallery);
