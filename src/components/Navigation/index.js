import React from 'react';

function Navigation (props) {
  const tabs = ['about', 'portfolio', 'contact', 'resume'];

  return (
    <ul className="navigation">
      {tabs.map(tab => (
        <li className="navigation-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
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