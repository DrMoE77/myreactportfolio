import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Col } from 'react-bootstrap'
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';

function Contact() {
    return (
        <section>
            <div className='' id="contact-div">
                <Col>


                    <h2>
                        Contact
                    </h2>

                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="your name" />
                        </Form.Group>
 
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                    </Form>
                </Col>
            </div>
        </section>

    )

}
export default Contact