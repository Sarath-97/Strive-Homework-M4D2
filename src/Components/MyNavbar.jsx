import { Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'

const MyNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">BookStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to = "/">Home</Link>
          <Link to ="/about">About</Link>
          <Link to ="/regristration" >Regristration</Link>
        </Nav>
        <Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
