import React, { useState } from 'react';
import Header from '../components/Header';
import Home from './Home';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import Footer from '../components/Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Contact');
    console.log(currentPage);
    console.log();
    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Experience') {
            return <Experience />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* // TODO: Add a comment describing what we are passing as props */}
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* // TODO: Add a comment explaining what is happening on the following line */}
            {renderPage()}
            <Footer />
        </div>
    );
}