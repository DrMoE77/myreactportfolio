import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Project from '../Project';
import Contact from '../Contact';
import Resume from '../Resume';
import Bookings from '../Bookings'; 

function Header() {
  // state of current page 
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {

    // switch case for returning the right page 

    switch (currentPage) {
      case "About":
        return <About></About>
      case "Contact":
        return <Contact></Contact>
      case "Portfolio":
        return <Project></Project>
      case "Resume":
        return <Resume></Resume>
        case "Bookings":
          return <Bookings></Bookings>
      default:
        return <About></About>
    }

  };

  return (

    <div>
      
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          renderPage()
        }
      </div>
    </div>
  );
}

export default Header;