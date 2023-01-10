import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  empty: {},
  root: {

    paddingTop: "2vh",
    width: "100%"
  },
  scroller: {
    // position: "relative",
    height: "6vh",
  },
  label: {
    fontSize: "1.25vw"
  },
  flex: {
    postion: "relative",
    // left: "50%"
  }
  // "& .indicator": {
  // display: "flex",
  // justifyContent: "center",
  // backgroundColor: "transparent",
  // "& > span": {
  //   maxWidth: 40,
  //   width: "100%",
  //   backgroundColor: "green !important"
  // }},
});

export default useStyles;