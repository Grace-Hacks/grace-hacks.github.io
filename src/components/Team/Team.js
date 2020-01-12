import React from 'react';
import { Card } from 'react-bootstrap';

function Team() {
  return (

    <Container id="team-section">
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Shivika Sivakumar</Card.Title>
                        <Card.Text>
                            Tech Team Lead
                        </Card.Text>
                        <Button variant="primary">LinkedIn</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Tim Nguyen</Card.Title>
                        <Card.Text>
                            Tech Team Member
                        </Card.Text>
                        <Button variant="primary">LinkedIn</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

  );
}

export default Team;
