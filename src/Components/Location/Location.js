
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

import './Location.css'

const Location = ({ place }) => {
    let history = useHistory();

    const { placeName, img } = place;
    const booking = (placeName) => {

        const url = `/booking/${placeName}`
        history.push(url);



    }




    return (
        <Col>
            <Card className="custom-card-style" onClick={() => { booking(placeName) }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between"> <span>{placeName}</span>   <span>    <i className="fas fa-map-marker-alt pe-2 text-warning"></i>
                        <i className="far fa-clock pe-2 text-warning"></i>
                        <i className="fas fa-dollar-sign pe-2 text-warning"></i>
                        <i className="fas fa-info-circle pe-2 text-warning"></i></span></Card.Title>
                    <Card.Text>

                    </Card.Text>


                </Card.Body>
            </Card>
        </Col>
    );
};

export default Location;