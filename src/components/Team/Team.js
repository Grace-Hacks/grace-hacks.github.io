import React from 'react';
import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

function Team() {
  return (

    <Container style={{paddingTop:"15px"}} id="team-section">
        <Row style={{paddingTop:"10px"}}>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title><Button variant="primary">Saniya Doshi</Button></Card.Title>
                        <Card.Text>
                            Founder and Executive Lead
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title><Button variant="primary">Navya Rao</Button></Card.Title>
                        <Card.Text>
                            Co-founder and PR Team Lead
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title><Button variant="primary">Shivika Sivakumar</Button></Card.Title>
                        <Card.Text>
                            Co-founder and Tech Team Lead
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row style={{paddingTop:"10px"}}>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title><Button variant="primary">Kelly Fesler</Button></Card.Title>
                        <Card.Text>
                            Logistics Team Lead
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title><Button variant="primary">Namratha Prithviraj</Button></Card.Title>
                        <Card.Text>
                            Sponsorship Team Lead
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title><Button variant="primary">Sathya Gadhiraju</Button></Card.Title>
                        <Card.Text>
                            PR Team Member
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row style={{paddingTop:"10px"}}>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title><Button variant="primary">Tim Nguyen</Button></Card.Title>
                        <Card.Text>
                            Tech Team Member
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title><Button variant="primary">Desiderio Ascencio</Button></Card.Title>
                        <Card.Text>
                            Logistics Team Member
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title><Button variant="primary">Deeksha Manjunath</Button></Card.Title>
                        <Card.Text>
                            Sponsorship Team Member
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row style={{paddingTop:"10px"}}>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title><Button variant="primary">Anupreet Singh</Button></Card.Title>
                        <Card.Text>
                            Logistics Team Member
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

  );
}

export default Team;
