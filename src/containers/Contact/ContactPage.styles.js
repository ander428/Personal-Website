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
  }
});

export default styles;
