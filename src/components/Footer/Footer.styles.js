import { createUseStyles } from "react-jss";
import { colors } from "../../utils/Themes/values";

const useStyles = createUseStyles({
    text: {
        fontSize: 15,
        marginBottom: 0,
        color: colors.TEXT,
        "& p": {
            color: colors.TEXT
        }
    },
    border: {
        border: 0,
        height: "0.5px",
        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
    },
    footer: {
        width: "100%",
        margin: 'auto',
    }
});

export default useStyles;