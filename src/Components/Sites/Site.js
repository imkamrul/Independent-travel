import React from 'react';
import { Button, Col } from 'react-bootstrap';

const Site = ({ place }) => {
    const { placeName, img, details } = place;

    return (
        <Col md={6}>
            <div className="card mb-3 shadow">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} style={{ width: "100%", height: "190px" }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{placeName}</h5>
                            <p className="card-text">{details.slice(0, 135)}</p>
                            <Button variant="info">More Info</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Site;