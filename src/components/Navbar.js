import React from 'react';
 
 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





function Navbars() {
    
  return (


    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Container>
        <Navbar.Brand href="#homee"> <h1> Samuel's Portfolio</h1>   </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{fontSize: "30px", fontWeight: "bolder"}} className="ms-auto">
            <Nav.Link href="#aboutt" smooth> About Me  </Nav.Link>
            
            <NavDropdown title="Contacts" id="collasible-nav-dropdown contactt">
              <NavDropdown.Item href="#footerr" smooth >Find My Socials</NavDropdown.Item>
              
              <NavDropdown.Item href="#progresss">My Skills</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#homee">
                Support Me.
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  );
  
}


export default Navbars; 