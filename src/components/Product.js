import React, {Component} from 'react';
import {Card,Button,Col} from "react-bootstrap";
import yoda from "./yoda.jpg"
import axios from "axios";

class Product extends Component {

    constructor(props) {
        super(props);

        this.state={
            products:[],
            isLoaded:false,
        };
    }
    componentDidMount() {
        fetch("http://localhost:8000/api/product")
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    isLoaded:true,
                    products:json,
                })
            })
    }

    render() {
        var {isLoaded,products}=this.state;
            if (!isLoaded){
                return (
                    <div>
                        Loading...
                    </div>
                )
            }
            else {
                return (

                    products.map((item)=>{
                        return(

                                    <Card style={{width: '18rem'}} className="mt-3">
                                        <Card.Img variant="top" src={yoda} width={180} height={200}/>
                                        <Card.Body>
                                            <Card.Title>{item.product_name}</Card.Title>
                                            <Card.Text>
                                                {item.product_description}
                                            </Card.Text>
                                            <Button variant="primary" >İncele</Button>
                                        </Card.Body>
                                    </Card>




                        )


                    })


                )
            }
    }
}

export default Product;
