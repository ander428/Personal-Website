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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className={classes.name}>
                <p>JOSHUA ANDERSON</p>
            </div>
            <div>
                <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                classes={{
                    root: classes.root,
                    flexContainer: classes.flex,
                }}
                centered
                value={props.tabValue}
                >
                    {constants.MENU.map(tab => (
                        <LinkTab
                            key={tab.id}
                            style={{color: "lightgrey", textDecoration: "none"}}
                            label={<span className={classes.label}>{tab.title}</span>}
                            href={tab.url}
                            {...a11yProps(tab.id)}

                        />
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default NavTabs;