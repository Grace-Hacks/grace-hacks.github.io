import React from 'react';
import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

function Team() {
  return (

    <Container style={{paddingTop:"15px"}} id="team-section">

        <h1> Meet our TEAM </h1>

        <Row style={{paddingTop:"20px"}}>
            <Col>
                <Card className="mx-auto"style={{ width: '18rem' }}>
                    <Card.Img variant="top"/>
                    <img src={require('./Saniya.png')} width = "287px" height = "300px" alt="Card"/>
                    <Card.Body>
                    <Card.Title><Button variant="primary">Saniya Doshi</Button></Card.Title>
                        <Card.Text>
                            Founder and Executive Lead
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row style={{ paddingTop: "20px" }}>
          <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"/>
                  <img src={require('./Navya.png')} width = "287px" height = "300px" alt="Card"/>
                  <Card.Body>
                    <Card.Title><Button variant="primary">Navya Rao</Button></Card.Title>
                    <Card.Text>
                      Co-Founder and PR Lead
                    </Card.Text>
                    {/* <Card.Title>
                      <Link to='/https://www.google.com/'>
                        <Button variant="primary">Navya Rao</Button>
                      </Link>
                      <Card.Text>
                        Co-founder and PR Team Lead
                      </Card.Text>
                    </Card.Title> */}
                  </Card.Body>
            </Card>
          </Col>

          <Col>
              <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top"/>
                  <img src={require('./Shivika.png')} width = "287px" height = "300px" alt="Card"/>
                  <Card.Body>
                  <Card.Title><Button variant="primary">Shivika Sivakumar</Button></Card.Title>
                      <Card.Text>
                          Co-Founder and Tech Team Lead
                      </Card.Text>
                  </Card.Body>
              </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"/>
                <img src={require('./Kelly.png')} width = "287px" height = "300px" alt="Card"/>
                <Card.Body>
                <Card.Title><Button variant="primary">Kelly Fesler</Button></Card.Title>
                    <Card.Text>
                        Logistics Team Lead
                    </Card.Text>
                </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ paddingTop: "20px" }}>
          <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"/>
                <img src={require('./Namratha.png')} width = "287px" height = "300px" alt="Card"/>
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
              <Card.Img variant="top"/>
                  <img src={require('./Sathya.png')} width = "287px" height = "300px" alt="Card"/>
                  <Card.Body>
                    <Card.Title><Button variant="primary">Sathya Gadhiraju</Button></Card.Title>
                      <Card.Text>
                        PR Team Member
                      </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"/>
                    <img src={require('./Tim.png')} width = "287px" height = "300px" alt="Card"/>
                    <Card.Body>
                        <Card.Title><Button variant="primary">Tim Nguyen</Button></Card.Title>
                        <Card.Text>
                            Tech Team Member
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
          </Row>

          <Row style={{ paddingTop: "20px" }}>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"/>
                    <img src={require('./Desi.png')} width = "287px" height = "300px" alt="Card"/>
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
                    <Card.Img variant="top"/>
                    <img src={require('./Anu.png')} width = "287px" height = "300px" alt="Card"/>
                    <Card.Body>
                    <Card.Title><Button variant="primary">Anupreet Singh</Button></Card.Title>
                        <Card.Text>
                            Logistics Team Member
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"/>
                  <img src={require('./Simran.png')} width = "287px" height = "300px" alt="Card"/>
                  <Card.Body>
                    <Card.Title><Button variant="primary">Simran Gunsi</Button></Card.Title>
                    <Card.Text>
                      Lead Designer
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
  );
}

export default Team;
