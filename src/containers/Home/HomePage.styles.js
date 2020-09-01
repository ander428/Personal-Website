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
  title: {
    marginBottom: 0,
  },
  pMobile: {
    fontSize: "25px"
  },
  pNotMobile: {
    fontSize: "25px",
    textAlign: "justify"
  },
  text: {
    fontSize: 18,
    color: colors.TEXT,
    "& p": {
      color: colors.TEXT
    }
  },
  test:{},
  link: {
    textDecoration: "none",
    color: colors.DARK_SEA_GREEN,
    "&:hover": {
      color: colors.DARK_SEA_GREEN
    }
  },
  h2: {
    color: 'black', 
    marginTop: '10vh',
    marginBottom: '2vh'
  },
  h4: {
    fontStyle: 'italic',
    color: colors.TEXT,
  }
});

export default styles;
