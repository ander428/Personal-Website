import React from "react";
import "./Gallery.css";

const Panel = props => {
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
};

export default Panel;
