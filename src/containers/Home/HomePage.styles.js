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
    marginLeft: "auto",
    marginRight: "auto",
  },
  bottomLine: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "25%",
    borderBottom: theme.border
  },
  gridItemNotMobile: {
    width: "50%",
    marginTop: "auto",
    marginBottom: "auto",
    float: "left"
  },
  gridItemMobile: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    marginTop: "5%",
    marginBottom: "5%"
  },
  h2Mobile: {
    textAlign: "center",
    marginTop: "5%",
    fontSize: 32
  },
  h2NotMobile: {
    textAlign: "center",
    fontSize: 50
  },
  imgMobile: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "250px",
  },
  imgNotMobile: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "400px",
  },
  pMobile: {
    fontSize: "25px"
  },
  pNotMobile: {
    fontSize: "25px",
    textAlign: "justify"
  },
  paper: {
    position: "relative",
    boxShadow:
      "inset 0 -0.1em 0.1em rgba(0, 0, 0, 0.25)," +
      " inset 0 0.2em 0.2em rgba(0, 0, 0, 0.25)",
    width: "90%",
    height: "min-content",
    padding: "15px",
    borderRadius: "10px",
    margin: "auto",
    justifyContent: "center",
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
