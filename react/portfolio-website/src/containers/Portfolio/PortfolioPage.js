import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import { constants } from "../../utils/constants";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const styles = {
  label: {
      writingMode: "vertical-rl",
      textOrientation: "upright",
      borderRight: "5px dotted"
  },
    titles: {
        height: "48vh",

    }
};

const PortfolioPage = props => {
    const {classes} = props
  return (
    <Grid container spacing={3}>
        <Grid item xs={1} className={classes.titles}>
            <h2 className={classes.label}>Personal</h2>
            <br />
            <br />
            <h2 className={classes.label}>School</h2>
        </Grid>
        <Grid item xs={6}>
      <Gallery data={constants.PORTFOLIO.PERSONAL} />
      <Gallery data={constants.PORTFOLIO.SCHOOL} />
        </Grid>
    </Grid>
  );
};

export default withStyles(styles)(PortfolioPage);
