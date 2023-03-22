import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from './Header';
// import { useNavigate } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
    // const navigate = useNavigate();
    return (
        <Navbar className="top-nav">
            <Container >
                <Header />
                <Nav className=" justify-content-end">
                    <Nav.Link href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>About Me</Nav.Link>
                    <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Nav.Link>
                    <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
                    <Nav.Link href="#experience" onClick={() => handlePageChange('Experience')} className={currentPage === 'Experience' ? 'nav-link active' : 'nav-link'}>Experience</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavTabs;