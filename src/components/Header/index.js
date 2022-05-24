import React from "react";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";
import Navigation from "../Navigation";
import Project from "../Project";
import Resume from "../Resume";

function Header () {

    return (
        <nav className="navigation">
      <a href="/" className="brand-name">
        Mohamed Afifi
      </a>
      
      <div
        className="navigation-div">
        <ul>
          <li>
            <a href="/home">About</a>
          </li>
          <li>
            <a href="/about">Contact</a>
          </li>
          <li>
            <a href="/contact">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Resume</a>
          </li>

        </ul>
      </div>
    </nav>
    )
}
export default Header