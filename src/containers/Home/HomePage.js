import React from "react";
import styles from "./HomePage.styles.js";
import { withStyles } from "@material-ui/core";
import Header from "../../components/Header/Header";
import NavTabs from "../../components/Header/NavTabs/NavTabs.js";


const HomePage = props => {
  const { classes } = props;
  const tabValue = 0;

  const ref = React.useRef();

  const description = (
  <div className={classes.text}>
    <p>I am currently a Ph.D. at University of Pittsburgh in the  
      <a className={classes.link} href={"https://www.isp.pitt.edu/academics/doctor-philosophy-intelligent-systems"}> Intelligent Systems Program</a>.
    </p>
    <p>
      I am interested in researching ways to use AI to improve quality of life, fight disease, and ensure better & fair treatment in medicine. 
      I focus on methods and applications of causal inference, interpretable AI, and generally AI in medicine. I am working with 
      <a className={classes.link} href={"https://www.sci.pitt.edu/people/shyam-visweswaran"}> Dr. Shyam Visweswaran </a> working on clinical
      decision support as well as bias and fairness in AI.
    </p>
    <p>
      I received both my B.S. in Computer Science and M.S. at Chapman University in Orange, CA in the
      <a href={"https://catalog.chapman.edu/preview_program.php?catoid=18&poid=3368&returnto=862"} className={classes.link}>  Computational and Data Sciences </a>
      program.
    </p>
  </div>);

  return (
    <div className={"page"} style={{overflow: "hidden"}}>
      <div className={classes.contentContainer}>
          <div className={classes.row}>            
              <div className={classes.leftPanel}>
                  <Header 
                    src={"/imgs/background_image.jpg"} 
                    tabValue={0} 
                    title={
                    <div>
                      <p>Joshua</p>
                      <p>Wolff</p>
                      <p>Anderson</p>
                    </div>}
                    reference={ref} />
              </div>      
              <div className={classes.rightPanel}>      
                  <NavTabs tabValue={tabValue}/>
                  <div className={classes.info}>
                    <img src={"/imgs/grad.jpg"} alt={""} className={classes.profile}/>
                    <div style={{width: '50%', margin: 'auto'}}>
                      {description}
                    </div>
                  </div>
              </div> 
          </div>
      </div>
    </div>
  );

  // return (
  //   <span>
  //     <Header 
  //       src={"/imgs/background_home.png"} 
  //       tabValue={0} 
  //       title={"HELLO WORLD!"} 
  //       button={"About Me"}
  //       reference={ref} />
  //     <h2 className={classes.h2} ref={ref}>ABOUT ME</h2>
  //     <div style={{width: '50%', margin: 'auto'}}>
  //       {description}
  //     </div>
  //     <h2 className={classes.h2}>CAMPUS INVOLVEMENT</h2>
  //     <div className="d-flex bd-highlight mb-3 justify-content-center">
  //       <div className="p-2 bd-highlight" style={{ width: '40%' }}>
  //         {PITT_LAB}
  //       </div>
  //       <div className="p-2 bd-highlight" style={{ width: '40%' }}>
  //         {CHAP_LAB}
  //       </div>
  //     </div>
  //     <div className="d-flex bd-highlight mb-3 justify-content-center">
  //       <div className="p-2 bd-highlight" style={{ width: '40%' }}>
  //         {IV}
  //       </div>
  //       <div className="p-2 bd-highlight" style={{ width: '40%' }}>
  //         {DAA}
  //       </div>
  //     </div>

  //     <Footer />
  //   </span>
  // );
};

export default withStyles(styles)(HomePage);
