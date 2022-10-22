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
    textAlign:  "justify",
    color: colors.TEXT,
    "& p": {
      color: colors.TEXT
    }
  },
  test:{},
  link: {
    whitespace: "pre",
    fontWeight: "bold",
    textDecoration: "none",
    color: colors.MUI_PRIMARY,
    "&:hover": {
      color: colors.MUI_PRIMARY
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
  },
  contentContainer: {
    height: "100%",
    width: "100%",
    fontSize: "20px",
    color: "black",
    },
  box: {
    border: "1px solid black"
  },
  leftPanel: {
    flex: 4,
    backgroundColor: "black",
    zIndex: 0
  },
  rightPanel: {
    flex: 6,
  },
  row: {
    display: "flex",
    height: "100%",
    width: "100%",
        zIndex: -2
  },
  info: {
    width: "100%",
    height: "90vh",
    paddingTop: "10vh"
  },
  profile: {
    width: "20vh",
    height: "20vh",
    marginBottom: "3%",
    marginTop: "2%",
    borderRadius: "125px",
    "-webkit-border-radius": "125px",
    "-moz-border-radius": "125px",
  }
});

export default styles;
