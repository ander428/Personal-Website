import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import { constants } from "../../utils/constants";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const styles = {
  label: {
    writingMode: "vertical-rl",
    textOrientation: "upright",
    borderRight: "5px dotted",
    fontSize: "30px"
  },
  titles: {
    height: "40vh",
    paddingLeft: "10%"
  },
  grid: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 50
  }
};

const PortfolioPage = props => {
  const { classes } = props;
  return (
    <div className={"page"}>
      <Grid container spacing={6} className={classes.grid}>
        <Grid item xs={2} className={classes.titles}>
          <h2 className={classes.label}>Personal</h2>
          <br />
          <br />
          <h2 className={classes.label}>School</h2>
        </Grid>
        <Grid item xs={4}>
          <Gallery data={constants.PORTFOLIO.PERSONAL} />
          <Gallery data={constants.PORTFOLIO.SCHOOL} />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(PortfolioPage);
