import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





function Navbars() {
    
  return (


    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Samuel's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">About Me</Nav.Link>
            
            <NavDropdown title="Contacts" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Find My Socials</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.3">Call To Acyion</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
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