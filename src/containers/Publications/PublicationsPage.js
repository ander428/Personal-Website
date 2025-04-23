import React, {useRef, useEffect} from "react";
import { constants } from "../../utils/constants";
import { withStyles } from "@material-ui/core";
import styles from "./PublicationsPage.styles.js";
import Header from "../../components/Header/Header";
import NavTabs from "../../components/Header/NavTabs/NavTabs";
import { Cite, plugins } from "@citation-js/core";
import text from "./citation_text.js"
require('@citation-js/plugin-csl')

const PublicationsPage = props => {  
  const { classes } = props;
  const tabValue = 2;

  const aRef = useRef()
  plugins.add("@citation-js/plugin-csl")
  const cite = new Cite(text)

  var output = cite.get({format: 'real', type: 'json', style: 'csl'})

  useEffect(()=>{
        if(aRef==null)return
        aRef.current.innerHTML = ""
        
        for(var i = output.length-1; i >= 0; i--) {
            aRef.current.innerHTML += Cite(output[i]).format('bibliography', {
              format: 'html',
              template: 'apa',
              lang: 'en-US',
              prepend: '• '
            })
        }
    },[aRef, output])  

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
                  <p className={classes.section}>Publications (Updated {constants.UPDATED}):</p>
                  <div ref={aRef} />
                  <div>
                    <br />
                    <p className={classes.section}>Awards:</p>
                      {constants.AWARDS.map((item, i) => (
                        <p>[{item.publisher}] <i>{item.award}</i>: {item.paper}</p>
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
