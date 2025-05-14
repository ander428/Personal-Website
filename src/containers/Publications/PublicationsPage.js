import React, { useEffect, useState } from "react";
import { constants } from "../../utils/constants";
import { withStyles } from "@material-ui/core";
import styles from "./PublicationsPage.styles.js";
import Header from "../../components/Header/Header";
import NavTabs from "../../components/Header/NavTabs/NavTabs";
import { Cite } from "@citation-js/core";
import "@citation-js/plugin-bibtex";
import "@citation-js/plugin-csl";



const PublicationsPage = props => {  
  const { classes } = props;
  const tabValue = 2;

  const [formatted, setFormatted] = useState("");

  useEffect(() => {
    fetch("/resources/pubs.bib")
      .then(res => res.text())
      .then(bibtex => {
        const cite = new Cite(bibtex);
        const output = cite.format("bibliography", {
          format: "html",
          template: "ieee",
          lang: "en-US",
          prepend: "• ",
        });
        console.log(cite.data)
        setFormatted(output);
      })
      .catch(err => console.error("Citation parsing error:", err));
  }, []);

  const ref = React.createRef();

  return (
    <div className={"page"} style={{overflow: "hidden"}}>
      <div className={classes.contentContainer}>
          <div className={classes.row}>            
              <div className={classes.leftPanel}>
                <Header 
                  src={"/imgs/background_image.jpg"} 
                  tabValue={2}
                  title={"Publications"}
                  reference={ref} />
              </div>        
              <div className={classes.rightPanel}>
                <NavTabs tabValue={tabValue}/>
                <div className={classes.info}>
                  <p className={classes.section}>Publications (Updated {constants.GLOBAL_VARS.updated}):</p>
                  <div dangerouslySetInnerHTML={{ __html: formatted }} />
                  <div>
                    <br />
                    <p className={classes.section}>Awards:</p>
                      {constants.AWARDS.map((item, i) => (
                        <p key={i}>[{item.publisher}] <i>{item.award}</i>: {item.paper}</p>
                      ))}                  
                  </div>
                </div>
              </div>     
          </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PublicationsPage);
