import React, {Component} from 'react';
import "yoda.svg";
import {Navbar,Nav,NavDropdown,FormControl,Col,Form,Button,Container,Image} from "react-bootstrap";
class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect  className="shadow-lg" expand="lg" bg="light" variant="light">
                        <Container fluid={true}>
                            <Col xs={3} md={3} className="">
                                <Navbar.Brand href="/">
                                    
                                    <h4>ModaYoda</h4>
                                </Navbar.Brand>
                            </Col>
                            <Col xs={5} md={6} className="mr-auto">
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" id="Search"  className="w-50 shadow-lg border-danger"/>
                                    <Button variant="info" className="ml-2" >Search</Button>
                                </Form>
                            </Col>
                            <Col xs={4} md={3} className="d-flex">
                                <Button variant="outline-info" className="shadow-lg" href="/login">Login</Button>
                                <Button variant="outline-warning" className="ml-3 shadow-lg" href="/register">Register</Button>

                            </Col>








                        </Container>

                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;
