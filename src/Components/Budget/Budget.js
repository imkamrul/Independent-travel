import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Budget.css'

const Budget = () => {
    return (
        <div className="budget-bg">
            <Container className="pb-5">
                <Row>
                    <Col >
                        <h1 className="text-center pt-5  mt-5 text-info">    STANDARDIZED BUDGET ROOMS  </h1>
                        <div className="d-flex justify-content-center">      <hr className="w-25 " /></div>
                        <p className="text-center fs-2 d-flex justify-content-center">
                            <div className="budget-icon"> <i class="fas fa-coffee"></i></div>
                            <div className="budget-icon">      <i class="fas fa-wifi"></i></div>
                            <div className="budget-icon"> <i class="fas fa-tv"></i> </div>
                            <div className="budget-icon">        <i class="fas fa-swimmer"></i></div>
                            <div className="budget-icon">           <i class="fas fa-dumbbell"></i></div>



                        </p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Budget;