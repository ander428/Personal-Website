import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import { constants } from "../../utils/constants";
import { withStyles } from "@material-ui/core";
import styles from "./PublicationsPage.styles.js";
import Header from "../../components/Header/Header";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import Footer from "../../components/Footer/Footer";

const PublicationsPage = props => {
  const { classes } = props;

  const ref = React.createRef();

  return (
    <div className={"page"} style={{overflow: "hidden"}}>
      <div className={classes.contentContainer}>
          <div className={classes.row}>            
              <div className={classes.leftPanel}>
                <Header 
                  src={"/imgs/background_image.jpg"} 
                  tabValue={2}
                  title={"Publications"}
                  reference={ref} />
              </div>        
              <div className={classes.rightPanel}>
                <div className={classes.info}>
                  <p className={classes.section}>M.S. Thesis:</p>
                  <ul>
                    {constants.PUBLICATIONS.THESES.map((item, i) => (
                      <li>{item.cite}</li>
                    ))}                  
                  </ul>
                </div>
                <SocialButtons />
              </div>     
          </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PublicationsPage);
