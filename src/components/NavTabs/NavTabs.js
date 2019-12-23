import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {constants} from "../../utils/constants";
import useStyles from "./NavTabs.styles";
import "./NavTabs.css"

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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <nav>
            <div className={"parent"}>
                <Tabs
                    style={{height: "100%"}}
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    classes={{root: classes.tabs, flexContainer: classes.flex}}
                    centered
                >
                    {constants.MENU.map(tab => (
                        <LinkTab
                             key={tab.id}
                             label={<span className={classes.label}>{tab.title}</span>}
                             href={(tab.title === "Resume" ? "" : "/#") +
                             tab.url}
                             {...a11yProps(tab.id)}

                        />
                    ))}
                </Tabs>
            </div>
        </nav>
    );
};

export default NavTabs;