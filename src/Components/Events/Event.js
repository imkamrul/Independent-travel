import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Event.css'

const Event = ({ place }) => {
    const { id, placeName, img } = place;

    return (
        <Row className=" pt-3 events-border">
            <Col xs={1}><p>{id}</p></Col>
            <Col xs={6}><p><img src={img} style={{ height: "50px" }} alt="" /> <span className="ps-3">Event Name</span></p></Col>
            <Col xs={1}><p>16.12.2021</p></Col>
            <Col xs={1}><p>10.00 PM</p></Col>
            <Col xs={2}><p>{placeName}</p></Col>
            <Col xs={1} className="px-auto py-auto"><Button variant="info">Book</Button></Col>
        </Row>
    );
};

export default Event;