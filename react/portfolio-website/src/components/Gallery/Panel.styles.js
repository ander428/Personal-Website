import { colors } from "../../utils/Themes/values";

const styles = theme => ({
  panel: {
    boxShadow: theme.shadow.inset,
    diplay: "block",
    overflow: "hidden",
    width: "100%",
    height: "100%"
  },
  list: {
    width: "100%",
    display: "table",
    tableLayout: "fixed",
    margin: 0,
    padding: 0
  },
  link: {
    display: "block",
    width: "100%",
    position: "relative",
    zIndex: 3,
    verticalAlign: "bottom",
    padding: "15px 20px",
    boxSizing: "border-box",
    color: colors.BLACK,
    textDecoration: "none",
    fontFamily: " Open Sans, sans-serif",
    transition: "all 200ms ease",
    height: "100%"
  },
  item: {
    display: "table-cell",
    verticalAlign: "bottom",
    position: "relative",
    width: "16.66%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transition: theme.transition.default
  },
  title: {
    backgroundColor: colors.BLACK,
    textAlign: "center",
    top: "100%",
    left: "5%",
    width: "90%",
    height: "90%",
    textShadow: "-1px 1px 0 black, -2px 2px 0 black",
    textTransform: "uppercase"
  },
  element: {
    opacity: 0,
    margin: 0,
    width: "100%",
    textOverflow: "ellipsis",
    position: "relative",
    zIndex: 5,
    whiteSpace: "nowrap",
    overflow: "hidden",
    transform: "translateX(-20px)",
    transition: "all 400ms ease"
  }
});

export default styles;
