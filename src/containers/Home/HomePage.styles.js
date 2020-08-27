import { colors } from "../../utils/Themes/values";

const styles = theme => ({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  contentNotMobile: {
    // marginTop: 24,
    // marginBottom: 24
  },
  contentMobile: {
    // marginTop: 100,
    width: "100%"
  },
  title: {
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    transition: theme.transition
  },
  pMobile: {
    fontSize: "25px"
  },
  pNotMobile: {
    fontSize: "25px",
    textAlign: "justify"
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
