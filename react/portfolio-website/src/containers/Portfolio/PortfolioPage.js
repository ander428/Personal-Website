import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import { constants } from "../../utils/constants";

const PortfolioPage = props => {
  return (
    <div>
      <Gallery data={constants.PORTFOLIO.PERSONAL} />
      <Gallery data={constants.PORTFOLIO.SCHOOL} />
    </div>
  );
};

export default PortfolioPage;
