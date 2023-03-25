import React, { useState } from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import Footer from '../components/Footer';
import NavTabs from '../components/Navigation';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    console.log(currentPage);

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
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}