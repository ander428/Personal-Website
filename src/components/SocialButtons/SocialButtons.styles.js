import { makeStyles } from "@material-ui/styles";
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    icon: {
        color: 'grey',
        padding: 15,
        height: '100%',
        "&:hover": {
            color: 'black'
        }
    }
});

export default useStyles;