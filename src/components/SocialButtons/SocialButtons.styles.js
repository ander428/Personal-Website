import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => createStyles({
    icon: {
        color: 'grey',
        padding: 15,
        height: '100%',
        "&:hover": {
            color: 'black'
        }
    }
}));

export default useStyles;