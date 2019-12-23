import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => createStyles({
  root: {
    position: "relative",
    height: "100%",
    backgroundColor: "red"
  },
  tabs: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  flex: {
    height: "100%"
  },
  label: {
    fontSize: 25
  }
}));

export default useStyles;