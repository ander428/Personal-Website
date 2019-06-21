import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import { constants } from "../utils/constants";

const styles = {
  root: {
    boxShadow: "5px 10px 18px #888888"
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
    return (
      <div>
        <GridList cellHeight={200} spacing={1}>
          {this.state.data.map(project => (
            <GridListTile
              key={project.image}
              cols={project.featured ? 2 : 1}
              rows={project.featured ? 2 : 1}
            >
              <img src={project.image} alt={project.title} />
              <GridListTileBar
                title={project.title}
                titlePosition="top"
                actionIcon={constants.ICONS.info}
                actionPosition="left"
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(Gallery);
