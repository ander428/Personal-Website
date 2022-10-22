import React from "react";
import "./Gallery.css";

const Panel = props => {
  return (
    <li style={{ backgroundImage: `url(${props.image})`, height: "100%" }}>
      <div>
        <a href={props.link}>
          <h5>{props.topic}</h5>

          <p>
            <h2>{props.name}</h2>
            {props.description}
          </p>

          <h4>{props.dev}</h4>
        </a>
      </div>
    </li>
  );
};

export default Panel;
