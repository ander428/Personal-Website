import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import { constants } from "../../utils/constants";
import { withStyles } from "@material-ui/core";
import styles from "./PortfolioPage.styles.js";
import Header from "../../components/Header/Header";
import SocialButtons from "../../components/SocialButtons/SocialButtons";

const PortfolioPage = props => {
  const { classes } = props;
  return (
    <div className={"page"}>
      <Header 
        src={"/imgs/background_portfolio.png"} 
        tabValue={1}
        button={"View Portfolio"}
        title={"PORTFOLIO"} />
        
      <SocialButtons />

      <h2 className={classes.title}>PERSONAL PROJECTS</h2>
      <div className={classes.gallery}>
        <Gallery data={constants.PORTFOLIO.PERSONAL} />
      </div>
      <br />
      <h2 className={classes.title}>SCHOOL PROJECTS</h2>
      <div className={classes.gallery}>
        <Gallery data={constants.PORTFOLIO.SCHOOL} style={{float: "left"}}/>
      </div>
      <br />
    </div>
  );
};

export default withStyles(styles)(PortfolioPage);
