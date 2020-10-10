import React from 'react';
import './FAQ.scss';

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import { ExpandMore } from '@material-ui/icons';

const Accordion = withStyles({
  root: {
    width: '69%',
    margin: '20px 0',
    boxShadow: 'none',

    '&:before': {
      display: 'none',
    },

    '&$expanded': {
      margin: '20px 0',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    background: '#EBEBEB',
    borderRadius: '25px',
    fontSize: '35px',
    lineHeight: '34px',
    color: '#000000',
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    fontSize: '22px',
    lineHeight: '30px',
    fontFamily: '"Nunito", sans-serif',
    //color: '#FFFFFF',
  },
}))(MuiAccordionDetails);

function FAQ() {
  return (
  <div>
    <div class="page-title">
      <div class="letter">F</div>
      <div class="letter">A</div>
      <div class="letter">Q</div>
    </div>

    <div class="faq-section">
    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMore />}>What is a hackathon?</AccordionSummary>
      <AccordionDetails>A hackathon is a place where you can collaborate with others and express your creativity to create a product that solves some real-world problem. At GraceHacks, students of all different backgrounds and experiences will gather together to develop an idea and realize that solution all within the span of 12 hours!</AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMore />}>Who can attend?</AccordionSummary>
      <AccordionDetails>All female-identifying or non-binary college students (both undergraduates and graduates) are invited to attend, even with no prior experience necessary!</AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMore />}>What if I don’t have a team or idea?</AccordionSummary>
      <AccordionDetails>No worries! We’ll have a short activity at the beginning of the hackathon, where you can meet others who you might want to collaborate with :-)</AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMore />}>What if I don’t know how to code?</AccordionSummary>
      <AccordionDetails>GraceHacks is a wonderful place to get your feet wet in software development! Not a technical major? Don’t worry ~ the best hackathon teams delicately balance graphic designers, project managers, and business associates as well!</AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMore />}>How do I attend?</AccordionSummary>
      <AccordionDetails>This event is completely virtual. As long as you have internet connection and accessability to Zoom you are good to go!</AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMore />}>What can I create?</AccordionSummary>
      <AccordionDetails>Anything your heart desires! Hardware products, software applications, gaming interfaces ~ if you can dream it, you can build it!</AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMore />}>How much does it cost?</AccordionSummary>
      <AccordionDetails>GraceHacks will be absolutely FREE! We’ll provide food, swag, caffeine, WiFi, and a collaborative workspace to get your projects up and running quickly!</AccordionDetails>
    </Accordion>
    </div>
  </div>
  );
}

export default FAQ;
