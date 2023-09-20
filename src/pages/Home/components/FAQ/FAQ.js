import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './FAQ.scss';
import Petal from '../../../../assets/Faq-petal.svg'


function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const useStyles = makeStyles(() => ({
    frame: {
      background: "none",
      maxWidth: "max(54vw, 1122px)",
      boxShadow: "none",
      '&.MuiExpansionPanel-root:before': {
        display: 'none',
        border: 'none',
      },
    },
    question: {
      maxWidth: "max(54vw, 1122px)",
      minHeight: "auto !important",
      background: "#FFFFFF;",
      fontFamily: "Avenir",
      fontSize: "24px",
      borderRadius: "20px !important",
      marginBottom: "10px",
      position: "relative",
      zIndex: "1",
    },
    answer: {
      fontFamily: "Avenir",
      fontSize: "21px",
      color: "#393943",
      background: "#FFFFFF",
      maxWidth: "max(54vw, 1100px)",
      opacity: "0.8",
      borderRadius: "25px",
      height: "100px",
      paddingTop: "5%",
      paddingLeft: "25px",
      overflow: "scroll",
    },
    Accordion: {
      width: "50%",
    }
  }));

  return (
    <div className="faq-section" id="faq">
    <div className="faq-title">
        Frequently asked questions
      </div>
    <div className="faq-container" id="faq">
      <div className="accordian">
        <Accordion className={useStyles().frame} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>What is a hackathon?</AccordionSummary>
          <AccordionDetails className={useStyles().answer}>A hackathon is a place where you can collaborate with others and express your creativity to create a product that solves some real-world problem. At GraceHacks, students of all different backgrounds and experiences will gather together to develop an idea and realize that solution all within the span of 12 hours!</AccordionDetails>
        </Accordion>

        <Accordion className={useStyles().frame} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>Who can attend?</AccordionSummary>
          <AccordionDetails className={useStyles().answer}>Underrepresented students, such as those who identify as a woman, are genderqueer/non-conforming, or are non-binary are invited to attend the event! We want to support you in creating a project with other marginalized students as you begin your journey in tech/project development.</AccordionDetails>
        </Accordion>

        <Accordion className={useStyles().frame} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>What if I don’t have a team or idea?</AccordionSummary>
          <AccordionDetails className={useStyles().answer}>No worries! We’ll have a short activity at the beginning of the hackathon, where you can meet others who you might want to collaborate with. If you need ideas, you can start working with a theme to win one of our prized categories!</AccordionDetails>
        </Accordion>

        <Accordion className={useStyles().frame} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>What if I don’t know how to code?</AccordionSummary>
          <AccordionDetails className={useStyles().answer}>Our hackathon is catered towards beginners, and is a wonderful place to explore software development! Not a technical major? Don’t worry ~ the best hackathon teams delicately balance graphic designers, project managers, and business associates as well!</AccordionDetails>
        </Accordion>
      </div>
      <div className="accordian">
        <Accordion className={useStyles().frame} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>Will GraceHacks '22 be in person or virtual?</AccordionSummary>
          <AccordionDetails className={useStyles().answer}> This is a hybrid event! You can participate in person at Namaste Lounge, or participate online if you have internet connection and access to Zoom! </AccordionDetails>
        </Accordion>

        <Accordion className={useStyles().frame} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>What can I create, and are there prizes?</AccordionSummary>
          <AccordionDetails className={useStyles().answer}>Hardware products, software applications, gaming interfaces~ if you can dream it, you can build it! Compete with other teams to win prizes for different categories, like best beginner, best web app, etc.</AccordionDetails>
        </Accordion>

        <Accordion className={useStyles().frame} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>How much does it cost?</AccordionSummary>
          <AccordionDetails className={useStyles().answer}>GraceHacks will be absolutely FREE! We’ll provide food, swag, caffeine, WiFi, and a collaborative workspace to get your projects up and running quickly!</AccordionDetails>
        </Accordion>

        <Accordion className={useStyles().frame} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}> I have another question!</AccordionSummary>
          <AccordionDetails className={useStyles().answer}>Contact us through ucsc.gracehacks@gmail.com if you want to inquire about future events, clarification on anything you see in the site, sponsoring us, or if you're interested in collaborating with us!</AccordionDetails>
        </Accordion>
      </div>
    </div>
    </div>
  );
}

export default FAQ;