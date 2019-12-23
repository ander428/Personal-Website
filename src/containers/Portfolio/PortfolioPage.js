import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import { constants } from "../../utils/constants";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import styles from "./PortfolioPage.styles.js";

const PortfolioPage = props => {
  const { classes } = props;
  return (
    <div className={"page"}>
      <Grid container spacing={8} direction={"column"} className={classes.grid}>
        <Grid
          container
          item
          xs={"auto"}
          alignItems={"center"}
          className={classes.titles}
        >
          <Grid item>
            <h2 className={classes.label}>Personal</h2>
          </Grid>
          <Grid item>
            <Gallery data={constants.PORTFOLIO.PERSONAL} />
          </Grid>
        </Grid>
        <Grid container alignItems={"center"} item xs={"auto"}>
          <Grid item alignItems={"center"}>
            <h2 className={classes.label}>School</h2>
          </Grid>
          <Grid item>
            <Gallery data={constants.PORTFOLIO.SCHOOL} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(PortfolioPage);
