import React from "react";
import styles from "./HomePage.styles.js";
import { withStyles } from "@material-ui/core";
import Header from "../../components/Header/Header";
import SocialButtons from "../../components/SocialButtons/SocialButtons.js";
import Footer from "../../components/Footer/Footer.js";

const HomePage = props => {
  const { classes } = props;

  const ref = React.useRef();

  const description = (
  <div className={classes.text}>
    <p>I am a current graduate student working towards a </p>
        <p>
      <a href={"https://www.isp.pitt.edu/academics/doctor-philosophy-intelligent-systems"}
        className={classes.link}>
        Ph.D. in Intelligent Systems
      </a>
      <br />
      at University of Pittsburgh in Pittsburgh, PA
    </p>

    <p>Recently, I finished a degree in </p>
    <p>
      <a href={"https://catalog.chapman.edu/preview_program.php?catoid=18&poid=3368&returnto=862"}
        className={classes.link}>
        M.S. in Computational and Data Sciences
      </a>
      <br />
      at Chapman University in Orange, CA
    </p>
    <p>
      With endless amounts of data now available, I strive to learn and utilize statistical methods
      to attack big data problems through well-supported research tasks. I aim to gain experience in both
      industry and academia to cover relavent topics in my field. My focus is in the medical research. 
      Using methods in statistics, artificial Intelligence, and causal inference, I research
      methods and applications that reduce bias and increase interpretability for open and explainable
      AI in the medical field.
    </p>
  </div>);

  const PITT_LAB = (
    <div>
      <h4 className={classes.h4}>Intelligent Computing for Clinical Imaging (ICCI) Lab</h4>
      <p className={classes.text}>
        <a href={"http://www.rad.pitt.edu/imaging-research-lab.html"} className={classes.link}>ICCI </a>
        is a radiological research lab at University of Pittsburgh invoved in a number of projects concerning medical 
        imaging with the goal of improving evaluations and imaging procedures in a clinical environment. The lab has been involved 
        in a number of projects collaberating with the women's imaging division.<br /><br />My role in the lab is to research
        ways to make machine learning in medical imaging more interpretable and reduce bias in estimates. My advisor
        is <a href={"http://www.rad.pitt.edu/profile-detail.html?profileID=906"} className={classes.link}> Dr. Shandong Wu </a>,
        an associate Professor of Radiology, Biomedical Informatics, Bioengineering, Intelligent Systems, Computer Science, 
        Clinical and Translational Science at University of Pittsburgh.
    </p>
    </div>);

  const CHAP_LAB = (
    <div>
      <h4 className={classes.h4}>Hersh Lab</h4>
      <p className={classes.text}>
        <a href={"https://www.chapman.edu/our-faculty/jonathan-hersh"} className={classes.link}>Hersh Lab </a>
        is a economics and data science research lab at Chapman University led by Dr. Jonathan Hersh invoved in
        a number of projects concerning global development. The lab frequently collaberates with the 
        <a href="https://www.worldbank.org/en/home" className={classes.link}> World Bank </a>
        in a number of projects related to economic growth in third world countries. <br /><br />Working in this lab from 2020-2022,
        my role was to research open source data to develop a vulnerability index in sub-Saharan Africa. Through this lab
        I gained experience in working with unstructured GIS data using tools such as
        <a href="https://geopandas.org/en/stable/" className={classes.link}> Geopandas</a> and 
        <a href="https://r-spatial.github.io/sf/" className={classes.link}> Simple Features</a> libraries in Python and R respectively.
    </p>
    </div>);

  const IV = (
    <div>
      <h4 className={classes.h4}>InterVarsity Christain Fellowship</h4>
      <p className={classes.text}>
        <a href={"https://www.ivchapman.com/"} className={classes.link}>InterVarsity Christian Fellowship </a>
        is a college ministry group that provides a
        community of loving people no matter your faith background and teach people about the bible.
        I decided to become a student leader of this organization in Spring of 2017. I was involved
        as a small group bible study leader for my first year as a leader, then from 2018-2020 was the
        Large Group Coordinator. <br /><br />In that role I was responsible for reaching out to guest speakers,
        logistically planning out and scheduling our weekly large group meetings where the whole club 
        would meet, as well as managing the audio equipment setup.
    </p>
    </div>);

  const DAA = (
    <div>
      <h4 className={classes.h4}>Data Analytics Association</h4>
      <p className={classes.text}>
        <a href={"https://github.com/ChapmanDAA"} className={classes.link}>Data Analytics Association</a> is a professional club at Chapman University that was founded in Fall 2019.
        I took on the role of Internal VP in Spring 2020 being responsible for designing posters and flyers, 
        planning bi-weekly meetings, creating schedule and timing breakdowns for bi-weekly meetings, as well
        as seek opportunities for internal events.<br /><br />From 2019-2022, I served as a VP and later the club
        president taking on administrative responsibilities as well as running the executive team alongside
        our faculty advisor. 
      </p>
    </div>
  );

  return (
    <div className={"page"} >
      <Header 
        src={"/imgs/background_home.png"} 
        tabValue={0} 
        title={"HELLO WORLD!"} 
        button={"About Me"}
        reference={ref} />
      <SocialButtons />
      <h2 className={classes.h2} ref={ref}>ABOUT ME</h2>
      <div style={{width: '50%', margin: 'auto'}}>
        {description}
      </div>
      <h2 className={classes.h2}>CAMPUS INVOLVEMENT</h2>
      <div className="d-flex bd-highlight mb-3 justify-content-center">
        <div className="p-2 bd-highlight" style={{ width: '40%' }}>
          {PITT_LAB}
        </div>
        <div className="p-2 bd-highlight" style={{ width: '40%' }}>
          {CHAP_LAB}
        </div>
      </div>
      <div className="d-flex bd-highlight mb-3 justify-content-center">
        <div className="p-2 bd-highlight" style={{ width: '40%' }}>
          {IV}
        </div>
        <div className="p-2 bd-highlight" style={{ width: '40%' }}>
          {DAA}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default withStyles(styles)(HomePage);
