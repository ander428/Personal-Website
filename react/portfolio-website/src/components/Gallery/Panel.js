import React from "react";
import "./Gallery.css";

const Panel = props => {
  return (
    <li style={{ backgroundImage: `url(${props.image})` }}>
      <div>
        <a href={props.link}>
          <h5>{props.topic}</h5>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </a>
      </div>
    </li>
  );
};

export default Panel;
