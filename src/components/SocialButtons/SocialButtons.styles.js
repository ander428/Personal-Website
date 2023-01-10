// import { makeStyles } from "@material-ui/styles";
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    icon: {
        color: 'lightgray',
        padding: "1%",
        height: '100%',
        "&:hover": {
            color: 'gray'
        }
    }
});

export default useStyles;