import React from "react"
import './new.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav,NavDropdown,Container} from 'react-bootstrap';
export default class Navi extends React.Component{
    render(){
    return(
        
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Calculatin</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">DCF Calculator</Nav.Link>
      <Nav.Link href="#pricing">Fundamental Metrics</Nav.Link>
      <NavDropdown title="Other Calculators" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Ratios</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Property Return</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Compound Interest</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Mission</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">BMI Calculator </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Recommended Calorie Intake
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
    }
}