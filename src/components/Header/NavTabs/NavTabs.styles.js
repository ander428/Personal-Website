import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => createStyles({
  name: {
    position: "absolute",
    top: 0,
    left: 0,
    color: "lightgrey",
    textDecoration: "none",
    padding: 20
  },
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingRight: 30,
    height: "10vh",
    width: "50%"
  },
  scroller: {
    height: "10vh"
  },
  label: {
    fontSize: 18,
    color: "lightgrey", textDecoration: "none"
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
  flex: {
    height: "100%",
    width: "100%"
  },


}));

export default useStyles;