import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import sajekImg from '../../img/Sajek.jpg'
import './PopularCIties.css'

const PopularCities = () => {
    return (
        <Container className="mb-5" id="cities">
            <Row id="packages" className="mt-3 ">
                <Col>
                    <h1 className="text-center mt-5 pt-5">Popular
                        <span style={{ color: "#84B8D0" }}>  Cities!

                        </span>
                    </h1>
                    <p className="text-center fs-5 pt-3">World's leading Hotel Booking website,Over 30,000 Hotel rooms worldwide. Book Hotel rooms and enjoy your holidays with distinctive experience</p>
                </Col>


            </Row>
            <Row>
                <Col md={6}>
                    <div className="city-frame">
                        <Image src={sajekImg} style={{ width: "100%", height: "350px" }} rounded />
                        <h1 className="city-img-tille">Sajek</h1>
                        <p className=" city-details">12 Packages <br /> Starts from 3200tk </p>
                    </div>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={6}>
                            <div className="mb-3  city-frame ">
                                <Image src={sajekImg} style={{ width: "100%", height: "165px" }} className="" rounded />

                                <p className=" city-sm-details"> <span className="fs-3">Sajek</span> <br /> Starts from 3200tk </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3   city-frame">
                                <Image src={sajekImg} style={{ width: "100%", height: "165px" }} className="" rounded />

                                <p className=" city-sm-details"> <span className="fs-3">Sajek</span> <br /> Starts from 3200tk </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3   city-frame">
                                <Image src={sajekImg} style={{ width: "100%", height: "165px" }} className="" rounded />

                                <p className=" city-sm-details"> <span className="fs-3">Sajek</span> <br /> Starts from 3200tk </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3   city-frame">
                                <Image src={sajekImg} style={{ width: "100%", height: "165px" }} className="" rounded />

                                <p className=" city-sm-details"> <span className="fs-3">Sajek</span> <br /> Starts from 3200tk </p>
                            </div>
                        </Col>






                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default PopularCities;