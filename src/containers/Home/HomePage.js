import React, {useCallback, useEffect} from "react";
import styles from "./HomePage.styles.js";
import { Grid, Paper, withStyles } from "@material-ui/core";
import RoundImage from "react-rounded-image";
import { colors } from "../../utils/Themes/values";
import { constants } from "../../utils/constants";
import classNames from "classnames";

const HomePage = props => {
  const { classes } = props;
  const email = constants.CONTACT[0];

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return function cleanup() {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  });

  const handleWindowSizeChange = useCallback(() => {
    setWindowWidth({ width: window.innerWidth });
  }, []);

  return (
    <div className={"page"}
         style={windowWidth > 500 ? null : {overflow: "auto"}}
    >
      <div className={classes.header}>
        <h1 className={classes.title}>Hello World!</h1>
        <div className={classes.bottomLine}/>
      </div>

      <div>
        <div className={classNames({
          [classes.gridItemMobile]: (windowWidth < 500),
          [classes.gridItemNotMobile]: (windowWidth > 500)
        })}
        >
          <div style={{marginLeft: "auto", marginRight: "auto", width: "250px", marginTop: "5%"}}>
            <RoundImage
                image={"/imgs/profile2.jpg"}
                roundedColor={colors.CHAPMAN_RED}
                imageWidth="250"
                imageHeight="250"
                roundedSize="4"
            />
          </div>

          <h2 className={classNames({
            [classes.h2Mobile]: (windowWidth < 500),
            [classes.h2NotMobile]: (windowWidth > 500)
          })}>
            Joshua Anderson
          </h2>

          <h5 style={{ textAlign: "center" }}>
            Student | Developer | Data Analyst
          </h5>
        </div>

        <div className={classNames({
          [classes.gridItemMobile]: (windowWidth < 500),
          [classes.gridItemNotMobile]: (windowWidth > 500)
        })}
        >
          <div className={classes.paper}>
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
          </div>
        </div>
      </div>
      {/*<Grid
        container
        spacing={8}
        alignItems={"center"}
        justify={"center"}
        className={classes.grid}
      >
        <Grid
          container
          alignItems={"center"}
          direction={"column"}
          item
          xs={3}
          justify={"center"}
        >
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
            <h2 style={{ textAlign: "center", marginTop: "10%" }}>
              Joshua Anderson
            </h2>
          </Grid>
          <Grid item>
            <h5 style={{ textAlign: "center" }}>
              Student | Developer | Data Analyst
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
      </Grid>*/}
    </div>
  );
};

export default withStyles(styles)(HomePage);
