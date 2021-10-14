import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

const Heroic = () => {
    return (
        <div className="heroic-bg-img">
            <Container>
                <Row>
                    <Col xs={12} className="pt-5">
                        <h1 className="text-center mt-5 pt-5 fs-1 fw-bolder ">Plan your Travel Now ! </h1>
                        <p className=" fs-3 text-center">Experience the various exciting tour and travel packages and Make hotel reservations,<br /> find vacation packages, search cheap hotels and events</p>
                        <div className="d-flex justify-content-center"> <InputGroup className="mb-3 w-50 " size="lg">
                            <FormControl
                                placeholder="Search your destination"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="warning px-4 text-white fs-4 ">Search</Button>
                        </InputGroup></div>
                    </Col>

                </Row>
                <Row className="justify-content-md-center pb-5">
                    <Col xs lg="2" className="heroic-hover">
                        <i class="fas fa-route fs-1"></i>
                        <p>TOUR</p>
                    </Col>

                    <Col xs lg="2" className="heroic-hover">
                        <i class="fas fa-car-alt fs-1"></i>

                        <p>CAR</p>
                    </Col>
                    <Col xs lg="2" className="heroic-hover">
                        <i class="fas fa-hotel fs-1"></i>

                        <p>HOTEL</p>

                    </Col>
                    <Col xs lg="2" className="heroic-hover">
                        <i class="fas fa-plane fs-1"></i>
                        <p>FLIGHT</p>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Heroic;