// import { makeStyles } from "@material-ui/styles";
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    background: {
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        height: "inherit",
        objectFit: "cover"
    },
    header: {
        height: "80vh",
        boxShadow: "inset 0 -0.1em 0.5em rgba(0, 0, 0, 0.5), inset 0 0.2em 0.2em rgba(0, 0, 0, 0.1)"
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
        WebkitTextStroke: "1px dimgrey"
    },
});

export default useStyles;