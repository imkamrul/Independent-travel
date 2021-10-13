
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

import './Location.css'

const Location = ({ place, handleDetails }) => {
    const { placeName, details, img, id } = place;


    return (
        <Col>
            <Card className="custom-card-style">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{placeName}</Card.Title>
                    <Card.Text>
                        {details.slice(0, 80)}
                    </Card.Text>
                    <p className='text-center'> <Button variant="outline-secondary" onClick={() => {
                        handleDetails(id)
                    }}>View Details</Button></p>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Location;