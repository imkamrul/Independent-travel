import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import usePackages from '../../Hooks/usePackages';
import Site from './Site';

const Sites = () => {
    const { location } = usePackages();
    return (
        <Container>
            <Row className="mt-3 ">
                <Col>
                    <h1 className="text-center mt-5 pt-5">Top
                        <span style={{ color: "#84B8D0" }}> Sites Seeing

                        </span> In This Month
                    </h1>
                    <p className="text-center fs-5 pt-3">World's leading Hotel Booking website,Over 30,000 Hotel rooms worldwide. Book Hotel rooms and enjoy your holidays with distinctive experience</p>
                </Col>


            </Row>
            <Row>    {
                location?.length ? location.slice(0, 4).map(place => <Site
                    key={place.id}
                    place={place}
                ></Site>) : <div className="text-center">
                    <Spinner animation="border" variant="dark" />
                </div>
            }

            </Row>
        </Container>
    );
};

export default Sites;