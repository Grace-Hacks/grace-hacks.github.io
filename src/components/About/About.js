import React from 'react';
import { Card } from 'react-bootstrap';

function About() {
  return (
    <Card id="about-section" className="mx-auto col-md-9" border="primary">
      <Card.Header as="h5">Our Mission</Card.Header>
      <Card.Body>
        <Card.Title>Create With Confidence.</Card.Title>
        <Card.Text>The aim of GraceHacks is to foster a welcoming and supportive hackathon environment for womxn and non-binary students. GraceHacks strives to empower these underrepresented groups and ensure that they have the confidence to create without inherent bias or sexism</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;