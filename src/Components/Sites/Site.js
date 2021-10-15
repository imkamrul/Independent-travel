import React from 'react';
import { Button, Col } from 'react-bootstrap';

const Site = ({ place }) => {
    const { placeName, img, details } = place;

    return (
        <Col md={6}>
            <div class="card mb-3 shadow">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} style={{ width: "100%", height: "190px" }} alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{placeName}</h5>
                            <p class="card-text">{details.slice(0, 135)}</p>
                            <Button variant="info">More Info</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Site;