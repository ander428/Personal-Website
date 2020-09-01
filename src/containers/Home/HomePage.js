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
      industry and academia to cover relavent topics in my field.
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
        as seek opportunities for internal events.<br /><br />For the 2020-21 academic year, I am serving as the club
        president taking on administrative responsibilities as well as running the executive team alongside
        our faculty advidsor.
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
