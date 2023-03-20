import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
const Headerexpose = ({user,handleLogout}) => {
  const userId = user?.uid;
  
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
            {userId ? (
                    <>
                      <div className="profile-logo">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          alt="logo"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginTop: "12px",
                          }}
                        />
                      </div>
                      <p style={{ marginTop: "12px", marginLeft: "5px" }}>
                        {user?.displayName}
                      </p>
                      <li className="nav-item nav-link" onClick={handleLogout}>
                        Logout
                      </li>
                    </>
                  ) : (
                    <Nav.Link className="justify-content-end active" >  <Link to="/auth" style={{ textDecoration: "none" }}>
                      <li
                        style={{color:"white"}}                
                      >
                        Login
                      </li>
                    </Link></Nav.Link>
                  )}
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Headerexpose;