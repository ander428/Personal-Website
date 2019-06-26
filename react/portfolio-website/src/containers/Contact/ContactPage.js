import React from "react";
import styles from "./ContactPage.styles.js";
import { Paper, Grid, withStyles } from "@material-ui/core";
import { defaultTheme } from "../../utils/Themes/Default";
import { constants } from "../../utils/constants";

const ContactPage = props => {
  const { classes } = props;
  return (
    <div className={"page"}>
      <h1 className={classes.title}>Contact Me</h1>
      <Paper className={classes.paper}>
        <Grid
          container
          alignItems={"center"}
          alignContent={"center"}
          justify={"center"}
          className={classes.grid}
        >
          {constants.CONTACT.map(contact => (
            <Grid
              container
              item
              alignItems={"center"}
              alignContent={"center"}
              justify={"center"}
              direction={"row"}
              style={{ marginBottom: "3%" }}
            >
              <Grid item xs={0} key={contact.id}>
                <i className={contact.icon} />
              </Grid>
              <Grid item xs={6}>
                <a className={classes.content} href={contact.link}>
                  {contact.title}
                </a>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default withStyles(styles(defaultTheme))(ContactPage);
