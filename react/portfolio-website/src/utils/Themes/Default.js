import { createMuiTheme } from "@material-ui/core";
import { settings } from "./values";

export const defaultTheme = createMuiTheme({
  radius: settings.radius,
  shadow: settings.shadow,
  transitions: {
    default: settings.transition,
    easing: settings.transition,
    duration: {
      leavingScreen: settings.transitionDelay
    }
  },
  spacing: {
    unit: 3
  }
});
