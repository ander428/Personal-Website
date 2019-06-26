import React, { Component } from "react";
import Panel from "./Panel";
import "./Gallery.css";

const Gallery = props => {
  return (
    <div className={"accordion"} style={{ filter: "grayscale(33%)" }}>
      <ul>
        {props.data.map((item, i) => (
          <Panel {...item} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
