import React from 'react';
import useStyles from "./Header.styles";
import NavTabs from './NavTabs/NavTabs';
import classNames from "classnames";
import { isMobile } from "react-device-detect";
import { 
    CssBaseline, 
    AppBar,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Drawer,
    Button,
    IconButton
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { colors } from "../../utils/Themes/values";
import { constants } from "../../utils/constants";

const Header = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const NavList = props => (
        <div
            role="presentation"
            onClick={handleDrawerClose}
            onKeyDown={handleDrawerClose}
        >
            <List>
                {constants.MENU.map((tab) => (
                    <ListItem
                        button
                        key={tab.id}
                        component="a"
                        href={tab.url}
                    >
                        <ListItemText primary={tab.title} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return(
        isMobile
            ? (<div>
                <CssBaseline />
                    <AppBar style={{backgroundColor: colors.DARK_SEA_GREEN, height: "10vh"}}>
                        <Toolbar>
                            <IconButton
                                edge={"end"}
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon style={{fontSize: 35}}/>
                            </IconButton>

                        </Toolbar>
                    </AppBar>
                    <Drawer anchor="top" open={open} onClose={handleDrawerClose}>
                        {NavList()}
                    </Drawer>
                </div>
            )
            :  (
            <div className={classes.header}>
                <NavTabs tabValue={props.tabValue} />
                <img src={props.src} alt="" className={classes.background}/>
                <div className={classes.contentAlign} />
                <div>
                    <h2 className={classNames({
                        [classes.h2Mobile]: isMobile,
                        [classes.h2NotMobile]: !isMobile
                    })}>
                        {props.title}
                    </h2>
                    <div style={{ paddingTop: 10 }}>
                        <Button 
                            variant="outlined" 
                            href={"#" + props.link}
                            className={classes.button}>
                                {props.button}
                        </Button>
                    </div>
                </div>    
            </div>)
    );
}

export default Header;