import React from "react";
import { constants } from "../../utils/constants";
import { withStyles } from "@material-ui/core";
import styles from "./TeachingPage.styles.js";
import Header from "../../components/Header/Header";
import SocialButtons from "../../components/SocialButtons/SocialButtons";

const TeachingPage = props => {
  const { classes } = props;

  const ref = React.createRef();

  return (
    <div className={"page"} style={{overflow: "hidden"}}>
      <div className={classes.contentContainer}>
          <div className={classes.row}>            
              <div className={classes.leftPanel}>
                <Header 
                  src={"/imgs/background_image.jpg"} 
                  tabValue={3}
                  title={"Teaching"}
                  reference={ref} />
              </div>        
              <div className={classes.rightPanel}>
                <div className={classes.info}>
                  <p className={classes.section}>Teaching Assistant:</p>
                  <ul>
                    {constants.TEACHING.TA.map((item, i) => (
                      <li>
                        [{item.terms}] {item.course} @ {item.university} ({item.location})
                      </li>
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

export default withStyles(styles)(TeachingPage);
