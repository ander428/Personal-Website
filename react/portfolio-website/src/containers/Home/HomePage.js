import React from "react";
import styles from "./HomePage.styles.js";
import { withStyles } from "@material-ui/core";
import {defaultTheme} from "../../utils/Themes/Default";

const HomePage = props => {
    const { classes } = props;
    return (
        <div>
            <h1 className={classes.title}>Hello World!</h1>
            <h5 className={classes.paragraph}>Welcome to my website!</h5>
        </div>
    );
};

export default withStyles(styles(defaultTheme))(HomePage);
