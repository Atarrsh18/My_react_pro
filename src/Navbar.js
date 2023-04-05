import React from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Container } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const Navibar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
            <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/CKDCalculator">
            <Nav.Link>CKDCalculator</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/CKDDetection">
            <Nav.Link>CKDDetection</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    <Outlet/>
    </div>
  );
};

export default Navibar;
