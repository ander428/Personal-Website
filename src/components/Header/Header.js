import React from 'react';
import useStyles from "./Header.styles";
import NavTabs from './NavTabs/NavTabs';
import { isMobile } from "react-device-detect";
import { 
    CssBaseline, 
    AppBar,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Drawer,
    IconButton
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { colors } from "../../utils/Themes/values";
import { constants } from "../../utils/constants";
import SocialButtons from '../SocialButtons/SocialButtons';

const Header = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    // const ref = props.reference;

    // const handleRef = () => {
    //     ref.current.scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'start'
    //     })
    // }

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
                <div style={{position: 'relative', height: "100vh"}}>
                    <img src={props.src} alt="" className={classes.background} />
                    <div className={classes.name} style={{fontSize: "100%"}}>
                        {props.title}
                    </div>
                    <div className={classes.buttons}>
                        <SocialButtons />
                    </div>
                </div>  
            </div>)
    );
}

export default Header;