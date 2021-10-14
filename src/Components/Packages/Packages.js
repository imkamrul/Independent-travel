import React from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import usePackages from '../../Hooks/usePackages';
import Location from '../Location/Location';

const Packages = () => {
    const { location } = usePackages();
    console.log(location)
    return (

        <Container>
            <Row id="packages" className="pb-5">
                <Col>
                    <h1 className="text-center mt-5 pt-5">Our
                        <span style={{ color: "#84B8D0" }}> Tour Packages
                        </span>
                    </h1>
                    <p className="text-center fs-5 pt-3">World's leading tour and travels Booking website,Over 30,000 packages worldwide.</p>
                </Col>

            </Row>
            <Row xs={1} md={3} className="g-4">
                {
                    location.length ? location.slice(0, 3).map(place => <Location
                        key={place.id}
                        place={place}
                    ></Location>) : <div className="text-center">
                        <Spinner animation="border" variant="dark" />
                    </div>
                }
            </Row>
        </Container>

    );
};

export default Packages;