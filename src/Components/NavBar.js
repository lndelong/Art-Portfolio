// import { ReactDOM } from 'react';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return(
      <>
        <Navbar bg="dark" variant="dark" expand="md">
          <Container className='container-fluid'>
            <Navbar.Brand as={NavLink} to="/Home">bymjek</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/Portfolio">Portfolio</Nav.Link>  
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
}

