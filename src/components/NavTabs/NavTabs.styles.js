import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => createStyles({
  root: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    height: "10vh",
    backgroundColor: "#A50034",
    boxShadow: "inset 0 -0.1em 0.1em rgba(0, 0, 0, 0.25), inset 0 0.2em 0.2em rgba(0, 0, 0, 0.25)"
  },
  flex: {
    height: "100%"
  },
  label: {
    fontSize: 25
  }
}));

export default useStyles;