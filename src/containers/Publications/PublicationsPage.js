import React, {useRef, useState, useEffect} from "react";
import { constants } from "../../utils/constants";
import { withStyles } from "@material-ui/core";
import styles from "./PublicationsPage.styles.js";
import Header from "../../components/Header/Header";
import NavTabs from "../../components/Header/NavTabs/NavTabs";
import { Cite, plugins } from "@citation-js/core";
import contents from "./citation_text.js"
import '@citation-js/plugin-bibtex'
import '@citation-js/plugin-csl'


const PublicationsPage = props => {  
  const { classes } = props;
  const tabValue = 2;

  // const [formatted, setFormatted] = useState('')

  const cite = new Cite(contents)
  const formatted = cite.format('bibliography', {
    format: 'html',
    template: 'apa',
    lang: 'en-US',
    prepend: '• '
  })

  // Simply wrap the output in <ul> and turn paragraphs into list items
  // setFormatted(output)


  const aRef = useRef()
  // plugins.config.get('@bibtex')
  // const cite = new Cite(contents)

  // // var output = cite.get({format: 'real', type: 'json', style: 'csl'})
  // const formatted = cite.format('bibliography', {
  // format: 'html',
  // template: 'apa',
  // lang: 'en-US'
  // });

  // useEffect(()=>{
  //        fetch('/citations.bib')
  //     .then(res => res.text())
  //     .then(bibText => {
  //       console.log(bibText)
  //       const cite = new Cite(bibText)
  //       const output = cite.format('bibliography', {
  //         format: 'html',
  //         template: 'apa',
  //         lang: 'en-US'
  //       })
  //       setFormatted(output)
  //     })
  //     .catch(err => console.error('Error loading .bib file:', err))
  //   },[aRef, formatted])  

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
