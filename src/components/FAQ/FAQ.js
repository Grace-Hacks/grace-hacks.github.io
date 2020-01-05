import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

function FAQ() {
  return (
    <Accordion>
      <Card className="mx-auto" style={{ width: '40rem' }}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          What is a hackathon?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>A hackathon is a place where you can collaborate with others and express your creativity to create a product that solves some real-world problem. At GraceHacks, students of all different backgrounds and experiences will gather together to develop an idea and realize that solution all within the span of 12 hours!</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="mx-auto" style={{ width: '40rem' }}>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Who can attend?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>All female-identifying or non-binary college students (both undergraduates and graduates) are invited to attend, even with no prior experience necessary!</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="mx-auto" style={{ width: '40rem' }}>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          What should I bring?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Be sure to bring an ID, a laptop (with charger), an empty bag for swag, and your creativity!</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="mx-auto" style={{ width: '40rem' }}>
        <Accordion.Toggle as={Card.Header} eventKey="3">
          What can I create?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>Anything your heart desires! Hardware products, software applications, gaming interfaces ~ if you can dream it, you can build it!</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="mx-auto" style={{ width: '40rem' }}>
        <Accordion.Toggle as={Card.Header} eventKey="4">
          How much does it cost?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body>GraceHacks will be absolutely FREE! We’ll provide food, swag, caffeine, WiFi, and a collaborative workspace to get your projects up and running quickly!</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="mx-auto" style={{ width: '40rem' }}>
        <Accordion.Toggle as={Card.Header} eventKey="5">
          What if I don’t have a team or idea?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <Card.Body>No worries! We’ll have a short activity at the beginning of the hackathon, where you can meet others who you might want to collaborate with. :-)</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="mx-auto" style={{ width: '40rem' }}>
        <Accordion.Toggle as={Card.Header} eventKey="6">
          What if I don’t know how to code?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="6">
          <Card.Body>GraceHacks is a wonderful place to get your feet wet in software development! Not a technical major? Don’t worry ~ the best hackathon teams  delicately balance graphic designers, project managers, and business associates as well!</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="mx-auto" style={{ width: '40rem' }}>
        <Accordion.Toggle as={Card.Header} eventKey="7">
          What if I have another question?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="7">
          <Card.Body>Feel free to email us at <a href="mailto:ucsc.gracehacks@gmail.com" target=
          "_blank">ucsc.gracehacks@gmail.com</a> for any other questions that you may have!</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default FAQ;