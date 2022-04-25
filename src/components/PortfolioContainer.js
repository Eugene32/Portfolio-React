import React, { useState } from 'react';
import NavTabs from './NavBar';
import AboutMe from './pages/AboutMe';
import Works from './pages/Works';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import Footer from './Footer';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const [search, setSearch] = useState('');

  // Handler for input changes to the search form
  const handleInputChange = (e) => setSearch(e.target.value);

  // Handler for what happens when the search form is submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //Insert function here for even on submission
  };

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <AboutMe />;
    }
    if (currentPage === 'Works') {
      return <Works />;
    }
    if (currentPage === 'Contact') {

      return <ContactMe
        value={search}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);



  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
     
         {renderPage() }
     

      <Footer />
    </div>
  );
}
