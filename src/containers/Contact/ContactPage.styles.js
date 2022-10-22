import { colors } from "../../utils/Themes/values";

const styles = theme => ({
  form: {
    margin: 'auto',
    width: '90%',
  },
  profileImg: {
    width: "inherit",
    height: "inherit",
    boxShadow: "inset 10px 10px 10px 10px rgba(0, 0, 0, 0.9)",
  },
  listTitle: {
    textAlign: "left"
  },
  list: {
    color: colors.TEXT,
    fontSize: "15px",
    width: "100%",
    marginLeft:30,
    textAlign: "left",
    padding: 10,
    '& li': {
      padding: 2
    }
  },
  contacts: {
    margin: 50
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
});

export default styles;
