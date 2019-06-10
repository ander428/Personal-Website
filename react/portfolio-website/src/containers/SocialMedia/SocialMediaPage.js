import React from "react";
import styles from "./SocialMediaPage.styles.js";
import {Typography, withStyles} from "@material-ui/core";
import { defaultTheme } from "../../utils/Themes/Default";
import { constants } from "../../utils/constants";

const SocialMediaPage = props => {
  const { classes } = props;
  return (
    <div>
      <h1 className={classes.title}>Contact Me</h1>
      {constants.CONTACT.map(contact => (
          <div>
              <i className={contact.icon} />
              <Typography>{contact.title}</Typography>
              <Typography>{contact.link}</Typography>
          </div>
      ))}
    </div>
  );
};

export default withStyles(styles(defaultTheme))(SocialMediaPage);
