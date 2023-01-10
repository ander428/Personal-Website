import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import { constants } from "../../utils/constants";
import { withStyles } from "@material-ui/core";
import styles from "./PortfolioPage.styles.js";
import Header from "../../components/Header/Header";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import NavTabs from "../../components/Header/NavTabs/NavTabs";

const PortfolioPage = props => {
  const { classes } = props;

  const ref = React.createRef();

  return (
    <div className={"page"} style={{overflow: "hidden"}}>
      <div className={classes.contentContainer}>
          <div className={classes.row}>            
              <div className={classes.leftPanel}>
                <Header 
                  src={"/imgs/background_image.jpg"} 
                  tabValue={1}
                  title={"Portfolio"}
                  reference={ref} />
              </div>            
              <div className={classes.rightPanel}>
                <NavTabs tabValue={props.tabValue}/>
                <div className={classes.info}>
                  <div className={classes.gallery}>
                    <Gallery data={constants.PORTFOLIO.HIGHLIGHTS} />
                  </div>
                  <div className={classes.gallery}>
                    <Gallery data={constants.PORTFOLIO.PERSONAL} />
                  </div>
                  <div className={classes.gallery}>
                    <Gallery data={constants.PORTFOLIO.SCHOOL}/>
                  </div>  
                </div>
                <p style={{margin: 0}}>Hover and click to learn more!</p>
              </div> 
          </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PortfolioPage);
