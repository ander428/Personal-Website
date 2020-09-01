import React from 'react';
import useStyles from './Footer.styles';

const Footer = props => {
    const classes = useStyles();

    return(
        <div style={{marginBottom: 10}}>
            <hr className={classes.border}/>
            <div className={classes.footer}>
                <div className={classes.text}>
                    <div className="d-flex">
                        <div className="p-2 bd-highlight" style={{ width: '40%' }}>
                            Joshua Anderson
                    </div>
                        <div className="p-2 bd-highlight" style={{ width: '40%' }}>
                            M.S. Computational and Data Sciences
                    </div>
                        <div className="p-2 bd-highlight" style={{ width: '40%' }}>
                            Schmid College of Science and Technology
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Footer;