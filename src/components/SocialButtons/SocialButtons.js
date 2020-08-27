import React from "react";
import { isMobile } from "react-device-detect";
import classNames from 'classnames';
import { constants } from "../../utils/constants";
import useStyles from "./SocialButtons.styles";

const SocialButtons = props => {
    const classes = useStyles();

    return(
        <div>
            {/* social media */}
            <div className="d-flex bd-highlight mb-3 justify-content-center"
                style={isMobile ? { marginTop: '15vh' } : { marginTop: '5vh' }}>
                {constants.CONTACT.map(contact => (
                    <div className="p-2 bd-highlight col-example" style={{ height: "10%" }} key={contact.id}>
                        <a href={contact.link}>
                            <i className={classNames(contact.icon, classes.icon)} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SocialButtons; 