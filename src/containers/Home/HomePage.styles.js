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
    marginTop: 24,
    marginBottom: 24
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
