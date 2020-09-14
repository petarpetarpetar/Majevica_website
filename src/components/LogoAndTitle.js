import React, {Component} from 'react';
import {Col, Image, Row, Container} from 'react-bootstrap'
import logo from './data/images/logo.png'
class LogoAndTitle extends Component {

  render() {
    return (
        <Container fluid>
            <Row className="justify-content-center">
              <Image src={logo} id="logoimage" className="img-responsive center-block"/>
            </Row>
            <Row id="logotext" className="justify-content-center">
              <Col xs="10" lg="9">
                Majevica je harmonija različitosti, turistička destinacija prepoznatljiva po spoju kulturuno-istorijskog nasleđa, prirodnih ljepota i gostoprimljivih ljudi.
              </Col>
            </Row>
        </Container>
      )
  }
}

export default LogoAndTitle;
