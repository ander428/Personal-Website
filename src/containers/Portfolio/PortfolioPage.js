import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import { constants } from "../../utils/constants";
import { withStyles } from "@material-ui/core";
import styles from "./PortfolioPage.styles.js";
import Header from "../../components/Header/Header";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import Footer from "../../components/Footer/Footer";

const PortfolioPage = props => {
  const { classes } = props;

  const ref = React.createRef();

  return (
    <div className={"page"}>
      <Header 
        src={"/imgs/background_portfolio.png"} 
        tabValue={1}
        title={"PORTFOLIO"}
        button={"View Portfolio"}
        reference={ref} />
        
      <SocialButtons />

      <h2 className={classes.title} ref={ref}>HIGHLIGHTS</h2>
      <div className={classes.gallery}>
        <Gallery data={constants.PORTFOLIO.HIGHLIGHTS} />
      </div>
      <br />
      <h2 className={classes.title} ref={ref}>PERSONAL PROJECTS</h2>
      <div className={classes.gallery}>
        <Gallery data={constants.PORTFOLIO.PERSONAL} />
      </div>
      <br />
      <h2 className={classes.title}>SCHOOL PROJECTS</h2>
      <div className={classes.gallery}>
        <Gallery data={constants.PORTFOLIO.SCHOOL} style={{float: "left"}}/>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(PortfolioPage);
