import React, {Component} from 'react';
import {Button, Form, FormControl, Navbar,Nav} from "react-bootstrap";
import divWithClassName from "react-bootstrap/cjs/divWithClassName";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Productview from "../Productview";
import Register from "../Register";
import Login from "../Login";

class Test extends Component {
    render() {
        return (
            <div>
                <Navbar.Brand href="#home"><h4>ModaYoda</h4></Navbar.Brand>
                <Form inline className="">
                    <FormControl type="text" placeholder="Search" className="w-auto" />
                    <Button variant="outline-info" className="ml-2">Search</Button>
                </Form>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">


                    </Nav>
                </Navbar.Collapse>



                <Router >
                    <Route exact path="/" component={Productview}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                </Router>






            </div>




        );
    }
}

export default Test;
