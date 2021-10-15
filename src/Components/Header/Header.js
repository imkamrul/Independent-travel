import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from '../../img/airplane.png'
import './Header.css'
import TopHeader from './TopHeader';

const Header = () => {
    const { user, logOut } = useAuth();


    return (
        <div>
            <TopHeader></TopHeader>

            <Navbar style={{ background: "#89BBD4" }} expand="lg" sticky="top">
                <Container className="nav-style">
                    <NavLink to="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />

                        Independent Travel
                    </NavLink>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-style">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#packages">Packages</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#cities">Cities</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#hotels">Hotel</Nav.Link>

                            <Nav.Link as={HashLink} to="/home#events">Events</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                            <Nav.Link as={HashLink} to="/booking">Booking</Nav.Link>


                            <span className=" text-light pt-1 px-3 fw-bolder fs-5">{user.displayName}</span>

                            {user.email ? <Button variant="warning" onClick={logOut}>Log Out</Button>
                                : <NavLink to="/login"><Button variant="outline-success">Log In</Button></NavLink>}



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;