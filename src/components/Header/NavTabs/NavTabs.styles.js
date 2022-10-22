import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  name: {
    position: "absolute",
    top: 0,
    left: 0,
    color: "lightgrey",
    textDecoration: "none!important",
    padding: 20,
    fontFamily: "Darlington",
    fontSize: 50
  },
  empty: {},
  root: {
    position: "absolute",
    top: "1%",
    right: 0,
    paddingRight: 30,
    height: "6vh",
    width: "60%",
  },
  scroller: {
    height: "6vh",
  },
  label: {
    fontSize: 18
  },
  flex: {
    height: "100%",
    width: "100%",
    overflowX: "visible !important"
  },
  "& .indicator": {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "transparent",
  "& > span": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "green !important"
  }},
});

export default useStyles;