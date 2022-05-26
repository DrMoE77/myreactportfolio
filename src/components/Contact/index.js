import React from 'react';
import { Col } from 'react-bootstrap'
import { Form} from "react-bootstrap";

function Contact() {
    return (
        <section>
            <div className='body-div' id="contact-div">
                <Col>
                    <h2>
                        Contact
                    </h2>

                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='labels'>Name</Form.Label>
                            <Form.Control className='inputs' type="name" placeholder="your name" />
                        </Form.Group>
 
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='labels'>Email address</Form.Label>
                            <Form.Control className='inputs' type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='labels'>Message</Form.Label>
                            <Form.Control className='inputs' as="textarea" rows={5} />
                        </Form.Group>
                        <button>
                            Submit
                        </button>
                    </Form>
                </Col>
            </div>
        </section>

    )

}
export default Contact