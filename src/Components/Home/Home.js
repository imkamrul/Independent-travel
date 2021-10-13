import React, { useEffect, useState } from 'react';
import { Button, Card, Row, Spinner } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import Location from '../Location/Location';
import './Home.css'

const Home = () => {
    let history = useHistory();
    const handleBooking = () => {
        history.push("/booking");
    }

    // data load and set sada 
    const [places, setPlaces] = useState({});
    const [selectedplaces, setSelectedPlaces] = useState({});
    useEffect(() => {
        fetch('./tourSpot.json')
            .then(res => res.json())
            .then(data => {

                setPlaces(data);
            })
    }, [])
    const handleDetails = (id) => {
        const selectplace = places.find(place => place.id === id)
        setSelectedPlaces(selectplace)

    }



    return (
        <div className="bg-img">
            <div className="row g-0">
                <div className="col-md-4 pt-5">
                    <div className="row g-0">
                        <div className="d-flex justify-content-center pt-3">
                            <div className="col-md-9">
                                <h1 className="text-white">Spots details</h1>
                                {
                                    <Card className="custom-card-style">
                                        <Card.Img variant="top" src={selectedplaces.img} />
                                        <Card.Body>
                                            <Card.Title>{selectedplaces.placeName}</Card.Title>
                                            <Card.Text>
                                                {selectedplaces.details}
                                            </Card.Text>
                                        </Card.Body>
                                        <Button variant="danger" className="fs-2" onClick={handleBooking}>Book now</Button>
                                    </Card>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 p-5">
                    <h3 className="text-white text-center py-3">Spots </h3>
                    <Row xs={1} md={3} className="g-4">
                        {
                            places.length ? places.map(place => <Location
                                key={place.id}
                                place={place} handleDetails={handleDetails}
                            ></Location>) : <div className="text-center">
                                <Spinner animation="border" variant="dark" />
                            </div>
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;