import React, { useEffect, useState } from 'react';
import './booking.css'
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';





const Booking = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams();
    const onSubmit = data => {
        console.log(data)
    };



    return (
        <Container>
            <Row>

                <div className="d-flex justify-content-center">
                    <Col md={6}>
                        <h1 className="text-center pt-4 ">Booking for <span className="text-warning"> {id}</span></h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">
                            <input defaultValue={user.displayName} {...register("name")} className="w-100" />
                            <input defaultValue={user.email} {...register("email", { required: true })} className="w-100" />
                            <input defaultValue={id} {...register("PlaceName", { required: true })} className="w-100" />
                            <input placeholder="Total person" {...register("person", { required: true })} className="w-100" />
                            {errors.person && <span className="error text-start ">This field is required</span>}
                            <input type="submit" value="Confirm" className="w-100" />
                        </form></Col>
                </div>
            </Row>
        </Container>

    );
};

export default Booking;