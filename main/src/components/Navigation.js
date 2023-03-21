import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
    // const navigate = useNavigate();
    return (
        <Navbar >
            <Container>
                <Navbar.Brand> <h1 className='navFont'>M Z </h1></Navbar.Brand>
                <Nav className=" justify-content-end">
                    <Nav.Link href="../Home" onClick={() => handlePageChange('Home')}>About Me</Nav.Link>
                    <Nav.Link href="../Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
                    <Nav.Link href="../Contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
                    <Nav.Link href="../Experience" onClick={() => handlePageChange('Experience')}>Experience</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavTabs;