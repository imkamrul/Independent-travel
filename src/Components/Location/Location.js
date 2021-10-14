
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

import './Location.css'

const Location = ({ place }) => {
    console.log(place)
    const { id, placeName, img } = place;




    return (
        <Col>
            <Card className="custom-card-style">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between"> <span>{placeName}</span>   <span>    <i class="fas fa-map-marker-alt"></i>
                        <i class="far fa-clock"></i>
                        <i class="fas fa-dollar-sign"></i>
                        <i class="fas fa-info-circle"></i></span></Card.Title>
                    <Card.Text>

                    </Card.Text>
                    {/* <p className='text-center'> <Button variant="outline-secondary" >View Details</Button></p> */}

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Location;