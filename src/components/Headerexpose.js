import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../Images/logo.png";
const Headerexpose = () => {
  return (
    <div >
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} style={{height:"2.8em",paddingLeft:"10px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/blogs" className="active">All Blogs</Nav.Link>
            <Nav.Link href="https://www.neeleshshekhar.com" target="_blank" className="active">About Neelesh</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Headerexpose;