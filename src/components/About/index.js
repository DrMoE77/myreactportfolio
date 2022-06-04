import React from 'react';
import { Col } from 'react-bootstrap'
import profile_image from '../../media/image.jpg';

function About() {
    return (
        <section>
            <div className='body-div' id="about-div">
                <Col id="about-div-text" >

                    <h2 className='heading'>
                        A little about me!
                    </h2>

                    <img id='profile_pic' alt="this describes me" src={profile_image}>
                    
                    </img>

                    <p className='about_text'>
                        I am a Pharmacist, training to be a lawyer. I am currently working on a Medication reminder app and data science collection for my research with UTS-ASU. The most recent pharmacy work for me was at Priceline Pharmacies and Chemist Warehouse and legal work was HIV AIDS legal centre (HALC) and Kamyia Legal. In 2019 I went overseas for a while with my family and when I returned, I was studying full-time for my Master of Pharmaceutical Medicine and doing some locum work. 
I am a pharmacist. I have completed five University degrees and I am currently completing my PhD. I am completing my full-stack development course and will be moving on to a data science course. I wanted to learn code so I can apply my knowledge and ideas in the areas of Medicine and Pharmacy, innovative science and technology and even in the Law.

In my PhD I am conducting research that involves The University of Newcastle the University of Technology Sydney (UTS) and Arizona State University (ASU). </p>
                </Col>
            </div>
        </section>

    )

}
export default About