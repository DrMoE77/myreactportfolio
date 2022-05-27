import React from 'react';


function Navigation (props) {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

  return (
  
    <ul className="navigation">

    <li id='brand' className='navigation-item'><a href=''>Mohamed Afifi</a></li>
     
      {tabs.map(tab => (
        
        <li className="navigation-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'navigation-link active' : 'navigation-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  
  );
}



export default Navigation;