import React from 'react';
import {constants} from "../../utils/constants";
import useStyles from "./NavTabs.styles";
import {
    CssBaseline,
    AppBar,
    Tabs,
    Tab,
    Toolbar,
    IconButton,
    Drawer, List, ListItem, ListItemText
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {isMobile} from "react-device-detect";
import {colors} from "../../utils/Themes/values";

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
            <Tab
                component="a"
                {...props}
            />
    );
}

const NavTabs = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                        href={(tab.title === "Resume" ? "" : "/#") + tab.url}
                    >
                        <ListItemText primary={tab.title}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        isMobile
            ? (<div>
                <CssBaseline />
                    <AppBar style={{backgroundColor: colors.CHAPMAN_RED, height: "10vh"}}>
                        <Toolbar>
                            <IconButton
                                edge={"end"}
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon />

                            </IconButton>

                        </Toolbar>
                    </AppBar>
                    <Drawer anchor="top" open={open} onClose={handleDrawerClose}>
                        {NavList()}
                    </Drawer>
                </div>
            )
            : (<Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                classes={{
                    root: classes.root,
                    flexContainer: classes.flex,
                }}
                centered
                >
                    {constants.MENU.map(tab => (
                        <LinkTab
                            key={tab.id}
                            style={{color: "lightgrey", textDecoration: "none"}}
                            label={<span className={classes.label}>{tab.title}</span>}
                            href={(tab.title === "Resume" ? "" : "/#") +
                            tab.url}
                            {...a11yProps(tab.id)}

                        />
                    ))}
                </Tabs>)
    );
};

export default NavTabs;