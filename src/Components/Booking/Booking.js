import React from 'react';

import './booking.css'

import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">

            <input defaultValue={user.displayName} {...register("name")} />


            <input defaultValue={user.email} {...register("email", { required: true })} />
            <input placeholder="Destination" {...register("PlaceName", { required: true })} />




            {errors.PlaceName && <span className="error text-start">This field is required</span>}

            <input type="submit" className="" />
        </form>
    );
};

export default Booking;