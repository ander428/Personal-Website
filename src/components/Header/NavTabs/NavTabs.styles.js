import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => createStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingRight: 30,
    height: "10vh",
    width: "60%"
  },
  flex: {
    height: "100%"
  },
  label: {
    fontSize: 20
  },
  name: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingTop: 20,
    paddingLeft: 25,
    color: "lightgrey", 
    textDecoration: "none"
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  }


}));

export default useStyles;