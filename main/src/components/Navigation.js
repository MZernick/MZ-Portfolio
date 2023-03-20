import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
    return (
        <Navbar >
            <Container>
                <Navbar.Brand> <h1 className='navFont'>M Z </h1></Navbar.Brand>
                <Nav className=" justify-content-end">
                    <Nav.Link href="../Home">About Me</Nav.Link>
                    <Nav.Link href="../Portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="../Contact">Contact</Nav.Link>
                    <Nav.Link href="../Experience">Experience</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavTabs;