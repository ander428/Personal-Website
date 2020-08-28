import React, { useEffect } from "react";
import styles from "./HomePage.styles.js";
import { withStyles } from "@material-ui/core";
import Header from "../../components/Header/Header";
import SocialButtons from "../../components/SocialButtons/SocialButtons.js";

const HomePage = props => {
  const { classes } = props;
  const buttonLink = "AboutMeHeader";

  const description = (
  <div className={classes.text}>
    <p>I am a current graduate student working towards a </p>
    <p>
      <a href={"https://catalog.chapman.edu/preview_program.php?catoid=18&poid=3368&returnto=862"}
        className={classes.link}>
        M.S. in Computational and Data Sciences
      </a>
      <br />
      at Chapman University in Orange, CA
    </p>
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
      <Header 
        src={"/imgs/background_home.png"} 
        tabValue={0} 
        title={"HELLO WORLD!"} 
        button={"About Me"}
        link={buttonLink} />
      <SocialButtons />
      <h2 style={{ color: 'black', marginTop: '10vh' }} id={buttonLink}>ABOUT ME</h2>
      <div style={{width: '50%', margin: 'auto'}}>
        {description}
      </div>
    </div>
  );
};

export default withStyles(styles)(HomePage);
