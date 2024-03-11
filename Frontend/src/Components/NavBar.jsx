import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#" style={{ color: "orange" }}>
          Comfort Path
        </Navbar.Brand>
        <i class="fa-solid fa-shoe-prints" style={{ color: "orange" }}></i>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link href="#Home" style={{ color: "orange" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: "orange" }}>
              About
            </Nav.Link>
            {/* <Nav.Link href="#categories">Categories</Nav.Link> */}
            <Nav.Link href="#bestsellers" style={{ color: "orange" }}>
              BestSellers
            </Nav.Link>
            <Nav.Link href="#contact" style={{ color: "orange" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/login" style={{ color: "orange", textDecoration: "none" }}>
          Login
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
