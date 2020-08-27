import { makeStyles, createStyles } from "@material-ui/styles";
import { colors } from "../../utils/Themes/values";

const useStyles = makeStyles((theme) => createStyles({
    form: {
        margin: 'auto',
        width: '90%',
    },
    textInput: {
        width: "100%",
        padding: 10,
    },
    button: {
        padding: 10,
        width: "98%",
        backgroundColor: "#a1c97d",
        '&:hover': {
            backgroundColor: "#a1c97d",
        }
    },
    messageBox: {
        padding: 20,
        width: "75%",
        margin: "20px auto 20px auto",
        // border: "1px solid lightgrey",
        borderRadius: "10px"
    },
    text: {
        color: colors.TEXT
    }
}));

export default useStyles;