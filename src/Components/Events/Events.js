import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import usePackages from '../../Hooks/usePackages';
import Event from './Event';

const Events = () => {
    const { location } = usePackages();
    return (
        <Container id="events">
            <Row className="mt-3 ">
                <Col>
                    <h1 className="text-center mt-5 pt-5">Tops
                        <span style={{ color: "#84B8D0" }}> Events

                        </span> on this month
                    </h1>
                    <p className="text-center fs-5 pt-3">World's leading Hotel Booking website,Over 30,000 Hotel rooms worldwide. Book Hotel rooms and enjoy your holidays with distinctive experience</p>
                </Col>


            </Row>
            <Row className="mb-5">
                <Col xm={12} className="">
                    <Row className="fs-4 fw-bolder pt-3 border">
                        <Col md={1} xs={2}><p>#</p></Col>
                        <Col md={6} xs={7}><p>Event Name</p></Col>
                        <Col md={1} xs={2}><p>Date</p></Col>
                        <Col md={1} xs={4}><p>Time</p></Col>
                        <Col md={2} xs={4}><p>Location</p></Col>
                        <Col md={1} xs={4}><p>Book</p></Col>
                    </Row>
                    {
                        location?.length ? location.map(place => <Event
                            key={place.id}
                            place={place}
                        ></Event>) : <div className="text-center">
                            <Spinner animation="border" variant="dark" />
                        </div>
                    }

                </Col>

            </Row>
        </Container>
    );
};

export default Events;