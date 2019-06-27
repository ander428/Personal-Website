import { colors } from "../../utils/Themes/values";

const styles = theme => ({
  title: {
    marginBottom: 0,
    marginTop: "2%",
    width: "25vw",
    marginLeft: "auto",
    marginRight: "auto",
    transition: theme.transition,
    borderBottom: theme.border
  },
  paper: {
    position: "relative",
    boxShadow:
      "inset 0 -0.1em 0.1em rgba(0, 0, 0, 0.25)," +
      " inset 0 0.2em 0.2em rgba(0, 0, 0, 0.25)",
    width: "50%",
    height: "50%",
    marginTop: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    backgroundColor: colors.CHAPMAN_RED
  },
  grid: {
    height: "100%"
  },
  content: {
    textDecoration: "none",
    color: "white",
    fontSize: 25,
    "&:hover": {
      textDecoration: "none",
      color: colors.BLACK
    }
  },
  media: {
    marginBottom: "3%",
    "&:hover": {
      color: colors.BLACK
    }
  }
});

export default styles;
