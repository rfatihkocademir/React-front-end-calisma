import React, {Component} from 'react';
import {Col,Row} from "react-bootstrap";
import Product from "./Product";
class Productview extends Component {
    render() {
        return (
            <div>

                    <Col className="bg-primary" md={8}>
                        <Product/>
                    </Col>
            </div>
        );
    }
}

export default Productview;
