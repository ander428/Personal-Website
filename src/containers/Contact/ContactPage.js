import React from "react";
import styles from "./ContactPage.styles.js";
import { withStyles } from "@material-ui/core";
import { constants } from "../../utils/constants";
import Header from "../../components/Header/Header.js";
import ContactForm from "../../components/ContactForm/ContactForm.js";
import SocialButtons from "../../components/SocialButtons/SocialButtons.js";

const ContactPage = props => {
  const { classes } = props;

  const buttonLink = "contactForm";
  const profileImg = <img className={classes.profileImg} alt="" src={constants.HOME.profile} />

  return (
    <div className={"page"}>
      <Header
        src={"/imgs/background_contact.png"}
        tabValue={3}
        title={"CONTACT ME"}
        button={"Send Message"}
        link={buttonLink} />

      <SocialButtons />

      <div className={classes.contacts}>
        <div className="d-flex bd-highlight mb-3 justify-content-center">
          <div className="p-2 bd-highlight align-self-center col-example" style={{ width: '33%' }}>
            <h5 className={classes.listTitle}>Feel free to find me on any of the following platforms:</h5>
            <ul className={classes.list}>
              {constants.CONTACT.map(contact => (
                <li key={contact.id}>
                  <p>{contact.name}: <a href={contact.link}>{contact.text}</a></p>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-2 bd-highlight col-example" style={{ height: '33vh' }}>
            {profileImg}
          </div>
        </div>
      </div>
      
      <div id={buttonLink}>
        <ContactForm />
      </div>
      
    </div>
  );
};

export default withStyles(styles(styles))(ContactPage);
