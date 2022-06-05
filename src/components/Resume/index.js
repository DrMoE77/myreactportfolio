import React from "react";
import Pdf from './resume.pdf';

function Resume () {

    return (
        <div className="body-div" id="resume-div">
            <div>
            <h2>
                Resume
            </h2>

            </div>
            <div>
            <p>
                Download My Resume <a href={Pdf}>Here</a>
            </p>

            </div>
            <div className="skills">
            <h3>
                Front End Technologies 
            </h3>
            <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>
                Back End Technologies 
            </h3>
            <ul className="skills-list">
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>NodeJS</li>
            </ul>
            </div>
           

        </div>
    )
}
export default Resume

