import React from "react";
import styles from "./ContactPage.styles.js";
import { Typography, withStyles } from "@material-ui/core";
import { defaultTheme } from "../../utils/Themes/Default";
import { constants } from "../../utils/constants";

const ContactPage = props => {
  const { classes } = props;
  return (
    <div className={"page"}>
      <h1 className={classes.title}>Contact Me</h1>
      {constants.CONTACT.map(contact => (
        <div key={contact.id}>
          <i className={contact.icon} />
          <Typography>{contact.title}</Typography>
          <Typography>{contact.link}</Typography>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles(defaultTheme))(ContactPage);
