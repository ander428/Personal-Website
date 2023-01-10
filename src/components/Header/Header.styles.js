// import { makeStyles } from "@material-ui/styles";
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    background: {
        width: "100%",
        zIndex: -1,
        height: "100vh",
        objectFit: "cover",
        webkitFilter: "grayscale(80%)",
        filter: "grayscale(80%)",
        opacity: "50%",
        position: "absolute",
        left: 0
    },
    header: {
        fontSize: "6vw",
        width: "100%",
        height: "100%",
        boxShadow: "inset 0 -0.1em 0.5em rgba(0, 0, 0, 0.5), inset 0 0.2em 0.2em rgba(0, 0, 0, 0.2)"
    },

    contentAlign: {
        paddingTop: "30vh",
    },
    button: {
        backgroundColor: "#a1c97d",
        '&:hover': {
            backgroundColor: "#a1c97d",
        }
    },
    h2Mobile: {
        textAlign: "center",
        marginTop: "5%",
        fontSize: 32
    },
    h2NotMobile: {
        textAlign: "center",
        fontSize: 48,
        WebkitTextStroke: "1px dimgrey",
        fontFamily: "Darlington"
    },
    name: {
    fontFamily: "Darlington", 
    color: "lightgray",
    opacity: "100% !important",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
    },
    buttons: {
        zIndex: 4,
        position: "absolute",
        left: "5%",
        bottom: "2.5%",
        scale: "33%",
    }
});

export default useStyles;