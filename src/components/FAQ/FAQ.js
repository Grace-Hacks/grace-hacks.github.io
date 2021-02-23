import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './FAQ.scss';


function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const useStyles = makeStyles(() => ({
    frame: {
      background: "none",
      maxWidth: "max(54vw, 700px)",
      boxShadow: "none",
    },
    question: {
      maxWidth: "max(54vw, 700px)",
      minHeight: "auto !important",
      background: "#EBEBEB",
      fontSize: "25px",
      borderRadius: "20px !important",
      marginBottom: "20px"
    },
    answer: {
      fontFamily: "Nunito",
      fontSize: "22px",
      color: "white",
    }
  }));

  return (
    <div class="faq-section" id="faq">
      <div class="word">
        <div class="letter">F</div>
        <div class="letter">A</div>
        <div class="letter">Q</div>
      </div>

      <Accordion className={useStyles().frame} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>What is a hackathon?</AccordionSummary>
        <AccordionDetails className={useStyles().answer}>A hackathon is a place where you can collaborate with others and express your creativity to create a product that solves some real-world problem. At GraceHacks, students of all different backgrounds and experiences will gather together to develop an idea and realize that solution all within the span of 12 hours!</AccordionDetails>
      </Accordion>

      <Accordion className={useStyles().frame} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>Who can attend?</AccordionSummary>
        <AccordionDetails className={useStyles().answer}>All female-identifying or non-binary college students (both undergraduates and graduates) are invited to attend, even with no prior experience necessary!</AccordionDetails>
      </Accordion>

      <Accordion className={useStyles().frame} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>What if I don’t have a team or idea?</AccordionSummary>
        <AccordionDetails className={useStyles().answer}>No worries! We’ll have a short activity at the beginning of the hackathon, where you can meet others who you might want to collaborate with :-)</AccordionDetails>
      </Accordion>

      <Accordion className={useStyles().frame} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>What if I don’t know how to code?</AccordionSummary>
        <AccordionDetails className={useStyles().answer}>GraceHacks is a wonderful place to get your feet wet in software development! Not a technical major? Don’t worry ~ the best hackathon teams delicately balance graphic designers, project managers, and business associates as well!</AccordionDetails>
      </Accordion>

      <Accordion className={useStyles().frame} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>How do I attend?</AccordionSummary>
        <AccordionDetails className={useStyles().answer}>This event is completely virtual. As long as you have internet connection and accessability to Zoom you are good to go!</AccordionDetails>
      </Accordion>

      <Accordion className={useStyles().frame} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>What can I create?</AccordionSummary>
        <AccordionDetails className={useStyles().answer}>Anything your heart desires! Hardware products, software applications, gaming interfaces ~ if you can dream it, you can build it!</AccordionDetails>
      </Accordion>

        <Accordion className={useStyles().frame} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
      <AccordionSummary className={useStyles().question} expandIcon={<ExpandMoreIcon />}>How much does it cost?</AccordionSummary>
        <AccordionDetails className={useStyles().answer}>GraceHacks will be absolutely FREE! We’ll provide food, swag, caffeine, WiFi, and a collaborative workspace to get your projects up and running quickly!</AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQ;
