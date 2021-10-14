import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css'

const TopHeader = () => {

    return (
        <div className="bg-light">
            <Container>
                <Row className="fs-5 text-muted pt-2">
                    <Col xs={12} md={8}>
                        <p>Contract: Uttara, Dhaka <span className="border-custom text-muted"> </span> Phone :+880123456789</p>
                    </Col>
                    <Col xs={6} md={4} className="text-end">
                        <i className="fab fa-facebook-square fs-2"></i><i className="fab fa-twitter-square fs-2 ps-2"></i><i className="fab fa-google-plus-g fs-2 ps-2"></i>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default TopHeader;