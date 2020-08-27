import React from "react";
import styles from "./HomePage.styles.js";
import { withStyles, Button } from "@material-ui/core";
import { isMobile } from "react-device-detect";
import { constants } from "../../utils/constants";
import Header from "../../components/Header/Header";
import SocialButtons from "../../components/SocialButtons/SocialButtons.js";

const HomePage = props => {
  const { classes } = props;
  const buttonLink = "AboutMeHeader";

  const description = (
  <div className={classes.text}>
    <p>I am a current graduate student working towards a </p>
    <a href={"https://catalog.chapman.edu/preview_program.php?catoid=18&poid=3368&returnto=862"} 
        className={classes.link}>
      M.S. in Computational and Data Sciences
    </a>
    <p>at Chapman University in Orange, CA</p>
    <p>
      With endless amounts of data now available, I strive to learn and utilize statistical methods
      to attack big data problems through well-supported research tasks. I aim to gain experience in both
      industry and academia to cover relavent topics in my field.
    </p>
    
  </div>)

  return (
    <div className={"page"}
         style={{overflow: "auto"}}
    >
       {/* header component */}
      <Header 
        src={"/imgs/background_home.png"} 
        tabValue={0} 
        title={"HELLO WORLD!"} 
        button={"About Me"}
        link={buttonLink}/>

      <SocialButtons />

      {/* About me section */}
      <h2 style={{ color: 'black', marginTop: '10vh' }} id={buttonLink}>ABOUT ME</h2>
      {isMobile ? 
        <div className={classes.contentMobile}>
          {description}
        </div>
      : <div className={classes.contentNotMobile}>
        <div className="d-flex bd-highlight mb-3 justify-content-center">
          <div className="p-2 bd-highlight col-example" style={{width: '50%'}}>
            {description}
          </div>
        </div>
      </div>
      } 
      </div>
  );
};

export default withStyles(styles)(HomePage);
