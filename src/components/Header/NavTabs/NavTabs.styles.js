import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => createStyles({
  root: {
    position: "absolute",
    top: "0",
    left: "100",
    right: "0",
    paddingRight: 30,
    height: "10vh",
    
    // boxShadow: "inset 0 -0.1em 0.1em rgba(0, 0, 0, 0.25), inset 0 0.2em 0.2em rgba(0, 0, 0, 0.25)"
  },
  flex: {
    height: "100%"
  },
  label: {
    fontSize: 20
  },
  name: {
    position: "absolute",
    top: "0",
    left: "0",
    paddingTop: 20,
    paddingLeft: 25,
    color: "lightgrey", 
    textDecoration: "none"
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "75vh",
    width: "100%",
    // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  }


}));

export default useStyles;