import React from 'react';
import {constants} from "../../../utils/constants";
import useStyles from "./NavTabs.styles";
import {
    Tabs,
    Tab
} from "@material-ui/core";


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
    const [value, setValue] = React.useState(props.tabValue);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <p className={classes.name}>JOSHUA ANDERSON</p>
            <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                classes={{
                    root: classes.root,
                    scroller: classes.scroller,
                    flexContainer: classes.flex
                }}
                centered>
                {constants.MENU.map(tab => (
                    <LinkTab
                        className={classes.tab}
                        key={tab.id}
                        label={<span className={classes.label}>{tab.title}</span>}
                        href={(tab.title === "Resume" ? "" : "/#") +
                        tab.url}
                        {...a11yProps(tab.id)}

                    />
                ))}
            </Tabs>
        </div>
    );
};

export default NavTabs;