import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import usePackages from '../../Hooks/usePackages';
import Hotel from './Hotel';

const Hotels = () => {
    const { location } = usePackages();
    return (
        <Container className="pb-5" id="hotels">
            <Row id="packages" className="mt-3 ">
                <Col>
                    <h1 className="text-center mt-5 pt-5">Hotels
                        <span style={{ color: "#84B8D0" }}> Booking Open Now!

                        </span>
                    </h1>
                    <p className="text-center fs-5 pt-3">World's leading Hotel Booking website,Over 30,000 Hotel rooms worldwide. Book Hotel rooms and enjoy your holidays with distinctive experience</p>
                </Col>


            </Row>
            <Row xs={1} md={3} className="g-4 pt-3">
                {
                    location?.length ? location.slice(0, 3).map(place => <Hotel
                        key={place.id}
                        place={place}>

                    </Hotel>)
                        : <div className="text-center">
                            <Spinner animation="border" variant="dark" />
                        </div>
                }
            </Row>
        </Container>
    );
};

export default Hotels;