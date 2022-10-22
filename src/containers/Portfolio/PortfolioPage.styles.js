const styles = theme => ({
  gallery: {
    height: "100%",
    width: "100%",
    flex: 10
  },
  title: {
    color: 'black',
    padding: 10
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
    paddingTop: "10vh", 
    paddingLeft: "5%",
    paddingRight: "5%",
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    marginBottom: 0
  }
});

export default styles;
