import React from 'react';
import {constants} from "../../../utils/constants";
import useStyles from "./NavTabs.styles";
import {
    Tabs,
    Tab
} from "@material-ui/core";
import styled from "@emotion/styled";


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
                style={{textDecoration: "none"}}
                {...props}
            />
    );
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 50,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

const NavTabs = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.tabValue);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
            <div className={classes.background}>
                <StyledTabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    classes={{
                        root: classes.root,
                        scroller: classes.scroller,
                        flexContainer: classes.flex,
                        indicator: classes.indicator
                    }}
                    textColor={"primary"}
                    centered>
                    {constants.MENU.map(tab => (
                        <LinkTab
                            className={classes.tab}
                            key={tab.id}
                            variant="fullWidth"
                            label={<span className={classes.label}>{tab.title}</span>}
                            href={(tab.title === "CV" ? "" : "/#") +
                            tab.url}
                            {...a11yProps(tab.id)}

                        />
                    ))}
                </StyledTabs>
            </div>
    );
};

export default NavTabs;