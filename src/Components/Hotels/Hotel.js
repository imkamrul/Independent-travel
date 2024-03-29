import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Hotel = ({ place }) => {
    const { id, placeName, img } = place;
    return (
        <Col>
            <Card className="custom-card-style">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{placeName}</Card.Title>
                    <Card.Text className="d-flex justify-content-between ">
                        <span className="mt-2 text-warning fs-5">Rating :<Rating
                            initialRating={id}

                            emptySymbol="far fa-star "
                            fullSymbol="fas fa-star "
                            readonly
                        /></span>
                        <span className="fs-3 text-info pt-2"> $3400 </span>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Hotel;