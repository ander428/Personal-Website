import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {constants} from "../../utils/constants";
import useStyles from "./NavTabs.styles";

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
        <Tabs
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
        </Tabs>
    );
};

export default NavTabs;