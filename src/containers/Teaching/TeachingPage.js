import React from "react";
import { constants } from "../../utils/constants";
import { withStyles } from "@material-ui/core";
import styles from "./TeachingPage.styles.js";
import Header from "../../components/Header/Header";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import NavTabs from "../../components/Header/NavTabs/NavTabs";

const TeachingPage = props => {
  const { classes } = props;
  const tabValue = 3; 

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
                <NavTabs tabValue={tabValue}/>
                <div className={classes.info}>
                  <p className={classes.section}>Teaching Assistant:</p>
                  <ul>
                    {constants.TEACHING.TA.map((item, i) => (
                      <li>
                        [{item.terms}] {item.course} @ {item.university} ({item.location})
                      </li>
                    ))}                  
                  </ul>
                  <p className={classes.section}>Guest Leactures:</p>
                  <ul>
                    {constants.TEACHING.GL.map((item, i) => (
                      <li>
                        [{item.terms}] {item.course} @ {item.university} ({item.location})
                        <ul>
                          <li>
                            {item.topic}
                          </li>
                        </ul>
                      </li>
                    ))}                  
                  </ul>
                </div>
              </div>     
          </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(TeachingPage);
