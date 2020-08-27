import React from 'react';
import useStyles from './ContactForm.styles';
import { 
    TextField,
    Button 
} from '@material-ui/core';

const ContactForm = props => {
    const classes = useStyles();
    
    return(
        <div className={classes.messageBox}>
            <h2 className={classes.text}>CONTACT</h2>
            <h6 className={classes.text}>Please fill out this form to contact me via email.</h6>
            <div className="d-flex flex-column justify-content-center"></div>
            <form className={classes.form}>
                <div className="p-2 col-example text-left" >
                    <TextField
                        className={classes.textInput}
                        label={"First Name"}
                        variant={"outlined"}
                        style={{ width: "50%" }} />
                    <TextField
                        className={classes.textInput}
                        label={"Last Name"}
                        variant={"outlined"}
                        style={{ width: "50%" }} />
                </div>
                <div className={"p-2 col-example text-left"}>
                    <TextField className={classes.textInput} label={"Email"} variant={"outlined"} />
                </div>
                <div className={"p-2 col-example text-left"}>
                    <TextField className={classes.textInput} multiline rows={5} label={"Message"} variant={"outlined"} />
                </div>
                <div className={"p-2 col-example text-center"}>
                    <Button className={classes.button}>Send</Button>
                </div>
            </form>
        </div>
    )
};

export default ContactForm;