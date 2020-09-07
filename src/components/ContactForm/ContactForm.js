import React from 'react';
import useStyles from './ContactForm.styles';
import { 
    TextField,
    Button 
} from '@material-ui/core';
// import { constants } from "../../utils/constants"
import emailjs from 'emailjs-com';

const ContactForm = props => {
    const classes = useStyles();

    // const [firstName, setFirstName] = React.useState("");
    // const [lastName, setLastName] = React.useState("");
    // const [senderEmail, setEmail] = React.useState("");
    // const [message, setMessage] = React.useState("");
    // const [sent, setSent] = React.useState(false);

    // const templateParams = {
    //     name: "Joshua Anderson",
    //     feedback: "test"
    // }
    // var service_id = "default_service";
    // var template_id = "template_YYrpbC3s";
    // const receiverEmail = constants.CONTACT[2].text;
    // const user = "jwanderson198@gmail.com"

    // const handleFirstName = (e) => {
    //     setFirstName(e.target.value)
    // }

    // const handleLastName = (e) => {
    //     setLastName(e.target.value)
    // }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    // const handleMessage = (e) => {
    //     setMessage(e.target.value)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     var template_params = {
    //         "reply_to": "reply_to_value",
    //         "from_name": "from_name_value",
    //         "to_name": "to_name_value",
    //         "message_html": "message_html_value"
    //     }

        // emailjs.send(
        //     service_id,
        //     template_id,
        //     templateParams
        // ).then(result => {
        //     setSent(true)
        // }).catch(err => {
        //     console.log('Failed to send feedback. Error: ', err)
        // })
    }
    
    return(
        <div className={classes.messageBox}>
            <h2 className={classes.text}>CONTACT</h2>
            <h6 className={classes.text}>Please fill out this form to contact me via email.</h6>
            <div className="d-flex flex-column justify-content-center"></div>
            <form className={classes.form} onSubmit={}>
                <div className="p-2 col-example text-left" >
                    <TextField
                        className={classes.textInput}
                        label={"First Name"}
                        variant={"outlined"}
                        onChange={}
                        style={{ width: "50%" }} />
                    <TextField
                        className={classes.textInput}
                        label={"Last Name"}
                        variant={"outlined"}
                        onChange={}
                        style={{ width: "50%" }} />
                </div>
                <div className={"p-2 col-example text-left"}>
                    <TextField 
                        className={classes.textInput} 
                        label={"Email"} 
                        variant={"outlined"}
                        onChange={} />
                </div>
                <div className={"p-2 col-example text-left"}>
                    <TextField 
                        className={classes.textInput} 
                        multiline 
                        rows={5} 
                        label={"Message"} 
                        variant={"outlined"}
                        onChange={} />
                </div>
                <div className={"p-2 col-example text-center"}>
                    <Button className={classes.button} type={"submit"}>Send</Button>
                </div>
            </form>
        </div>
    )
};

export default ContactForm;