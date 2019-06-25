import React, { Component } from "react";
import Panel from "./Panel";
import "./Gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <div className={"accordion"} style={{ filter: "grayscale(33%)" }}>
        <ul>
          {this.state.data.map((item, i) => (
            <Panel {...item} key={i} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Gallery;
