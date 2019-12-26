import React, {Component} from 'react';
import {Button, Dropdown, Form,Col,Card,} from "react-bootstrap";

class Register extends Component {
    render() {
        return (
            <div>

                <Col md={{ span: 4, offset: 4 }}>
                    <Card border="light mt-5">
                        <Card.Header><h4>Create Account</h4></Card.Header>
                        <Card.Body>
                            <Form className="mt-5">
                                <Form.Group controlId="formBasicEmail">

                                    <Form.Control type="email" placeholder="Email" />

                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">

                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">

                                    <Form.Control type="password" placeholder="Password Again" />
                                </Form.Group>
                                <Form.Group className="d-flex">
                                    <Form.Check/><p>I accept the agrement.</p>
                                </Form.Group>
                                <Button variant="info" type="submit">
                                    Register
                                </Button>
                                <Button variant="warning" type="submit" href="/login" className="ml-2">
                                     I'm already Registered
                                </Button>
                            </Form>

                        </Card.Body>
                    </Card>


                </Col>
            </div>
        );
    }
}

export default Register;
