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
      <Grid container spacing={8} className={classes.grid}>
        <Grid item xs={"auto"} className={classes.titles}>
          <h2 className={classes.label}>Personal</h2>
          <br />
          <br />
          <h2 className={classes.label}>School</h2>
        </Grid>
        <Grid item xs={"auto"}>
          <Gallery data={constants.PORTFOLIO.PERSONAL} />
          <Gallery data={constants.PORTFOLIO.SCHOOL} />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(PortfolioPage);
