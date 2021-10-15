import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Event.css'

const Event = ({ place }) => {
    const { id, placeName, img } = place;

    return (
        <Row className=" pt-3 events-border">
            <Col md={1} xs={2}><p>{id}</p></Col>
            <Col md={6} xs={5}><p><img src={img} style={{ height: "50px" }} alt="" /> <span className="ps-md-3">Event Name</span></p></Col>
            <Col md={1} xs={4}><p>16.12.2021</p></Col>
            <Col md={1} xs={3}><p>10.00PM</p></Col>
            <Col md={2} xs={4}><p>{placeName}</p></Col>
            <Col md={1} xs={4} className="px-auto py-auto"><Button variant="info">Book</Button></Col>
        </Row>
    );
};

export default Event;