import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import { constants } from "../../utils/constants";
import { withStyles } from "@material-ui/core";
import styles from "./PortfolioPage.styles.js";

const PortfolioPage = props => {
  const { classes } = props;
  return (
    <div className={"page"}>
        <div className={classes.gallery}>
          <Gallery data={constants.PORTFOLIO.PERSONAL} />
        </div>
        <div className={classes.gallery}>
          <Gallery data={constants.PORTFOLIO.SCHOOL} style={{float: "left"}}/>
        </div>
      </div>
  );
};

export default withStyles(styles)(PortfolioPage);
