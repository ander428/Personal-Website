import { colors } from "../../utils/Themes/values";

const styles = theme => ({
  title: {
    marginBottom: 0,
    marginTop: "1%",
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
  }
});

export default styles;
