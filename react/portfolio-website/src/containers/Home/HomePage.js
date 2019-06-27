import React from "react";
import styles from "./HomePage.styles.js";
import { Grid, Paper, withStyles } from "@material-ui/core";
import ExampleComponent from "react-rounded-image";
import { colors } from "../../utils/Themes/values";
import { constants } from "../../utils/constants";

const HomePage = props => {
  const { classes } = props;
  const email = constants.CONTACT[0];
  return (
    <div className={"page"}>
      <div className={classes.header}>
        <h1 className={classes.title}>Hello World!</h1>
      </div>
      <Grid
        container
        spacing={8}
        alignItems={"center"}
        justify={"center"}
        className={classes.grid}
      >
        <Grid container item xs={3} justify={"center"}>
          <Grid item>
            <ExampleComponent
              image={"/imgs/profile2.jpg"}
              roundedColor={colors.CHAPMAN_RED}
              imageWidth="250"
              imageHeight="250"
              roundedSize="4"
            />
          </Grid>
          <Grid item>
            <h2 style={{ textAlign: "center", marginTop: "5%" }}>
              Joshua Anderson
            </h2>
          </Grid>
          <Grid item>
            <h5 style={{ textAlign: "center" }}>
              Student | Developer | Technologist
            </h5>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h2>About Me</h2>
            <p style={{ fontSize: "20px" }}>
              My name is Joshua Anderson. I am a Senior at Chapman University
              studying a B.S. in Computer Science. I have always wanted to make
              an impact in the world, and it is a goal of mine to not just do
              that in my everyday life, but also using my skills in software
              engineering! I am always trying to challenge myself and find more
              opportunities. If you would like to contact me concerning a
              project or employment, feel free to email me at:
            </p>
            <a
              href={email.link}
              className={classes.email}
              style={{ fontSize: "20px" }}
            >
              {email.title}
            </a>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(HomePage);
