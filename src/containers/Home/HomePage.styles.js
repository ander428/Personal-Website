import { colors } from "../../utils/Themes/values";

const styles = theme => ({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    maxHeight: "65vh",
    // backgroundImage:"url('/imgs/background_home.png')",
  },
  contentNotMobile: {
    marginTop: 25,
    marginBottom: 25
  },
  contentMobile: {
    marginTop: 100,
    width: "100%"
  },
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
  },
  link: {
    textDecoration: "none",
    color: colors.DARK_SEA_GREEN,
    "&:hover": {
      color: colors.DARK_SEA_GREEN
    }
  },
  text: {
    fontSize: 18,
    color: colors.TEXT,
    "& p": {
      color:colors.TEXT
    }
  }
});

export default styles;
