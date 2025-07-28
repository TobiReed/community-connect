import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHandshake, FaClipboardList, FaPhotoVideo, FaUserFriends, FaInfoCircle } from "react-icons/fa";
import { MdFeed } from "react-icons/md";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="#">Community Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="#intro" className="d-flex align-items-center gap-2">
              <span><FaHandshake /> Welcome</span>
            </Nav.Link>
            <Nav.Link as={Link} to="#rules" className="d-flex align-items-center gap-2">
              <span><FaClipboardList /> Rules</span>
            </Nav.Link>
            <Nav.Link as={Link} to="#top" className="d-flex align-items-center gap-2">
              <span><FaPhotoVideo /> Top Content</span>
            </Nav.Link>
            <Nav.Link as={Link} to="#friends" className="d-flex align-items-center gap-2">
              <span><FaUserFriends /> Friends</span>
            </Nav.Link>
            <Nav.Link as={Link} to="#feed" className="d-flex align-items-center gap-2">
              <span><MdFeed /> Feed</span>
            </Nav.Link>
            <Nav.Link as={Link} to="#owasp" className="d-flex align-items-center gap-2">
              <span><FaInfoCircle /> OWASP</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
