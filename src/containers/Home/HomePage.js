import React from "react";
import styles from "./HomePage.styles.js";
import { withStyles } from "@material-ui/core";
import RoundImage from "react-rounded-image";
import { colors } from "../../utils/Themes/values";
import { constants } from "../../utils/constants";
import classNames from "classnames";
import {isMobile} from "react-device-detect"

const HomePage = props => {
  const { classes } = props;
  const email = constants.CONTACT[0];

  return (
    <div className={"page"}
         style={!isMobile ? null : {overflow: "auto"}}
    >
      <div className={classes.header}>
        <h2 className={classNames({
          [classes.h2Mobile]: isMobile,
          [classes.h2NotMobile]: !isMobile
        })}>
          Joshua Anderson
        </h2>
        <div className={classes.bottomLine}/>
        <h5 style={{ textAlign: "center", marginTop: "0.5%" }}>
          Student | Developer | Data Analyst
        </h5>

      </div>

      <div style={{marginTop: "5%", height:"60vh"}}>
        <div className={classNames({
          [classes.gridItemMobile]: isMobile,
          [classes.gridItemNotMobile]: !isMobile
        })}
        >
          <div className={classNames({
            [classes.imgMobile]: isMobile,
            [classes.imgNotMobile]: !isMobile
          })}>
            <RoundImage
                image={"/imgs/profile2.jpg"}
                roundedColor={colors.CHAPMAN_RED}
                imageWidth={!isMobile ? "400" : "250"}
                imageHeight={!isMobile ? "400" : "250"}
                roundedSize="6"
            />
          </div>


        </div>

        <div className={classNames({
          [classes.gridItemMobile]: isMobile,
          [classes.gridItemNotMobile]: !isMobile
        })}
             style={{height: "100%"}}
        >
          <div className={classes.paper}>
            <h2>About Me</h2>
            <p className={classNames({
              [classes.pMobile]: isMobile,
              [classes.pNotMobile]: !isMobile
            })}>
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
    </div>
  );
};

export default withStyles(styles)(HomePage);
