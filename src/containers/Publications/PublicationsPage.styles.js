const styles = theme => ({
  section: {
    color: 'black',
    fontWeight: "bold"
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
    paddingTop: "15vh", 
    paddingLeft: "5%",
    paddingRight: "5%",
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    marginBottom: 0,
    textAlign: "justify",
  }
});

export default styles;
