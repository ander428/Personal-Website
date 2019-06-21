const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  // drawerOpen: {
  //   width: drawerWidth,
  //   transition: theme.transition.default.create("width", {
  //     easing: theme.transition.default.sharp,
  //     duration: theme.transition.duration.enteringScreen
  //   })
  // },
  // drawerClose: {
  //   transition: theme.transition.default.create("width", {
  //     easing: theme.transition.default,
  //     duration: theme.transition.duration.leavingScreen
  //   }),
  //   overflowX: "hidden",
  //   width: theme.spacing.unit * 7 + 1,
  //   [theme.breakpoints.up("sm")]: {
  //     width: theme.spacing.unit * 9 + 1
  //   }
  // },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

export default styles;
