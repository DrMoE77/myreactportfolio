import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import image from '../../media/image.jpg'
import reportWebVitals from './reportWebVitals';
import { Col } from 'react-bootstrap'

function About() {
    return (
        <section>
            <div className='' id="about-div">
                <Col>


                    <h2>
                        About Me
                    </h2>

                    <img src={Image}>
                    
                    </img>

                    <p>
                        I am a Pharmacist, training to be a lawyer. I am currently working on a Medication reminder app and data science collection for my research with UTS-ASU </p>
                </Col>
            </div>
        </section>

    )

}
export default About