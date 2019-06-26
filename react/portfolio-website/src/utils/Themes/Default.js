import { createMuiTheme } from "@material-ui/core";
import { settings } from "./values";

export const defaultTheme = createMuiTheme({
  radius: settings.radius,
  shadow: {
    default: settings.shadow,
    inset: "inset 0 0 0 5px rgba(255, 255, 255, 0.1)"
  },
  border: "5px dotted",
  transition: {
    default: settings.transition,
    flex:
      "font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11)," +
      " flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11)," +
      " background 0.2s",
    duration: {
      leavingScreen: settings.transitionDelay
    }
  },
  spacing: {
    unit: 3
  },
  typography: {
    useNextVariants: true
  }
});
