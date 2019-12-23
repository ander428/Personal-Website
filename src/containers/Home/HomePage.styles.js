import { colors } from "../../utils/Themes/values";

const styles = theme => ({
  title: {
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    transition: theme.transition
  },
  paragraph: {
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
    transition: theme.transition
  },
  header: {
    marginBottom: 0,
    marginTop: "2%",
    width: "25vw",
    marginLeft: "auto",
    marginRight: "auto",
    borderBottom: theme.border
  },
  grid: {
    height: "75%"
  },
  paper: {
    position: "relative",
    boxShadow:
      "inset 0 -0.1em 0.1em rgba(0, 0, 0, 0.25)," +
      " inset 0 0.2em 0.2em rgba(0, 0, 0, 0.25)",
    width: "125%",
    height: "125%",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    backgroundColor: colors.CHAPMAN_RED
  },
  email: {
    textDecoration: "none",
    color: "white",
    fontSize: 25,
    "&:hover": {
      textDecoration: "none",
      color: colors.BLACK
    }
  }
});

export default styles;
