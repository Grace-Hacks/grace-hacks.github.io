import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Row style={{ margin: 0 }}>
      <Col style={{textAlign: 'left'}}>Made with <span role='img' aria-label='hearts'>❤️❤️❤️</span> by <span role='img' aria-label='snails'>🐌🐌🐌</span> in Santa Cruz</Col>
      <Col style={{textAlign: 'right'}}>© 2020 GraceHacks. All rights reserved.</Col>
    </Row>
  );
}

export default Footer;