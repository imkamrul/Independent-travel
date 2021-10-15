import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div id="contact">
            <div className="bg-dark text-white pt-5 text-muted">
                <Container>
                    <Row>
                        <Col md={3} >
                            <h1 className="fs-3 pb-2">Contact Info</h1>
                            <p>World's leading tour and travels Booking website,Over 30,000 packages worldwide.</p>
                        </Col>
                        <Col md={3} >
                            <h1 className="fs-3 pb-2">Independent Travel</h1>
                            <p>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A. Landmark : Next To Airport</p>
                            <h1 className="fs-4 pb-2">Phone:0123346767</h1>

                        </Col>
                        <Col md={3} >
                            <h1 className="fs-3 pb-2">Support & Help</h1>
                            <p>About Us <br />Feedbacks <br />Discount <br />Blog <br />Vacations </p>


                        </Col>
                        <Col md={3} >
                            <h1 className="fs-3 pb-2">Follow With Us</h1>
                            <p className="fs-2"><i className="fab fa-facebook pe-2"></i><i className="fab fa-instagram-square pe-2"></i><i className="fab fa-linkedin-in pe-2"></i><i className="fab fa-twitter pe-2"></i><i className="fab fa-youtube"></i> </p>


                        </Col>


                    </Row>
                </Container>
            </div>
            <p className="text-center pt-3">Copyrights © 2018 <span className="text-info"> Kamrul Hasan</span>. All Rights Reserved</p>
        </div>
    );
};

export default Footer;