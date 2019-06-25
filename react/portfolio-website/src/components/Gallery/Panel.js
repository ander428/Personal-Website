import React, { Component } from "react";
import "./Gallery.css";

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    return (
      <li style={{ backgroundImage: `url(${this.props.image})` }}>
        <div>
          <a href={this.props.link}>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
          </a>
        </div>
      </li>
    );
  }
}

export default Panel;
