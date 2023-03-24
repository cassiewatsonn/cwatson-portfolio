import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import ContactMe from './pages/ContactMe';
import Header from './Header';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // conditional operator to check which page is the current page in order to render it properly
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return < Portfolio/>;

    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <ContactMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='portfolio-cont'>
      <Header>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </Header>
      {renderPage()}
    </div>
  );
}


