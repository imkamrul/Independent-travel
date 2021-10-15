import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import googleD from '../../img/googlef.png'
import apple from '../../img/apple.png'
import mobileAPp from '../../img/mobileApp.jpg'

const MobileApp = () => {
    return (
        <Container className="pb-5">
            <Row>
                <Col md={6} className="d-flex "> <img src={mobileAPp} className="img-fluid pt-5" alt="" />
                </Col>
                <Col md={6} className="ps-3">
                    <h1 className="pt-5 mt-5">Have you tried our mobile app?</h1>
                    <p className="pt-3 fs-5">World's leading tour and travels Booking website,Over 30,000 packages worldwide. Book travel packages and enjoy your holidays with distinctive experience</p>
                    <p className="fs-4"><i className="fas fa-check-square text-info pe-3"></i> <span>Easy Hotel Booking</span></p>
                    <p className="fs-4"><i className="fas fa-check-square text-info pe-3"></i> <span>Tour and Travel Packages</span></p>
                    <p className="fs-4"><i className="fas fa-check-square text-info pe-3"></i> <span>Package Reviews and Ratings</span></p>
                    <p className="fs-4"><i className="fas fa-check-square text-info pe-3"></i> <span>Manage your Bookings, Enquiry and Reviews</span></p>

                    <Row>
                        <Col md={6}><img src={googleD} className="img-fluid" alt="" /></Col>
                        <Col md={6}> <img src={apple} alt="" className="img-fluid" /></Col>
                    </Row>



                </Col>
            </Row>
        </Container>
    );
};

export default MobileApp;