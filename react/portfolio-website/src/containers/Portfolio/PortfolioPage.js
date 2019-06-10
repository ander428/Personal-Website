import React from "react";
import { withStyles } from "@material-ui/core";
import { defaultTheme } from "../../utils/Themes/Default";
import Gallery from "../../components/Gallery";
import { constants } from "../../utils/constants";

const PortfolioPage = props => {
  const { classes } = props;
  return (
    <div>
      <Gallery data={constants.PORTFOLIO.PERSONAL} />
      <Gallery data={constants.PORTFOLIO.SCHOOL} />
    </div>
  );
};

export default PortfolioPage;
