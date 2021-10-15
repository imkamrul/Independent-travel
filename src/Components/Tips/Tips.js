import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Tips = () => {
    return (
        <div className="bg-light">
            <Container className="py-5">
                <Row>
                    <Col md={5}>
                        <h1>Tips Before Travel</h1>
                        <div className="fs-5 pt-3 text-muted">
                            <p><i className="fas fa-passport text-info pe-3"></i>
                                <span>Bring copies of your NID</span> </p>
                            <p><i className="fas fa-signature text-info pe-3"></i> <span>Register with your embassy</span></p>
                            <p><i className="fas fa-money-bill-alt text-info pe-3"></i> <span>Always have local cash
                            </span></p>
                        </div>
                    </Col>
                    <Col md={7} >
                        <h1 className="text-center">Customer Testimonial</h1>
                        <Row className="pt-3">
                            <Col md={4}>
                                <p className="text-md-end  mt-4"><i className="fas fa-user fs-1 text-info"></i></p>
                            </Col>
                            <Col md={8} className="text-start">
                                <h1>Kamrul Hasan</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel quaerat doloribus voluptatibus ipsam est!</p>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col>
                        <h1 className="text-center">ARRANGEMENT & HELPS</h1>
                        <div className="d-flex justify-content-center">
                            <Col md={8} className="">
                                <Row>



                                    <Col md={6} className="text-end pb-3"><Button variant="outline-info"><i className="fas fa-user-shield pe-3"></i> Private Guard</Button></Col>

                                    <Col md={6} className="text-start mb-3"><Button variant="outline-info"><i className="fas fa-layer-group pe-3"></i>Arrangements</Button></Col>

                                    <Col md={6} className="text-end pb-3"><Button variant="outline-info"><i className="far fa-calendar-check pe-3"></i>Events And Activities</Button></Col>
                                    <Col md={6} className="text-start mb-3"><Button variant="outline-info"><i className="fas fa-location-arrow pe-3"></i>Location Manager</Button></Col>

                                </Row>
                            </Col>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Tips;