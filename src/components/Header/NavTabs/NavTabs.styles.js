import { makeStyles } from "@material-ui/styles";
import { createUseStyles } from 'react-jss'

const useStyles = makeStyles((theme) => createUseStyles({
  name: {
    position: "absolute",
    top: 0,
    left: 0,
    color: "lightgrey",
    textDecoration: "none!important",
    padding: 20
  },
  empty: {},
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingRight: 30,
    height: "10vh",
    width: "50%",
  },
  tab: {
    // textDecoration: 'none'
  },
  scroller: {
    height: "10vh",
  },
  label: {
    fontSize: 18,
    color: "lightgrey", 
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
  flex: {
    height: "100%",
    width: "100%",
    right: 0,
    overflowX: "visible !important"
  },


}));

export default useStyles;