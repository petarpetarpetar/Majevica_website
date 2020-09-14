import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, } from 'react-bootstrap';

class NavBar extends Component {

  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Turistički region Majevica</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
            <Nav.Link href="#features">Biciklistička staza</Nav.Link>
            <Nav.Link href="#pricing">Galerija</Nav.Link>
            <Nav.Link href="#pricing">O nama</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
      )
  }
}

export default NavBar;
