import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FormControl, InputGroup } from 'react-bootstrap';

const Contack = () => {
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div>
            <h1>Contract {element} <i className="fab fa-facebook-square"></i></h1>
            <InputGroup className="mb-3">
                <FormControl
                    // placeholder={element}
                    // placeholder="&#xf082; Username"
                    placeholder="&#xF002; Search" style={{ fontFamily: "'Arial', Font Awesome 5 Free" }}
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />

                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>


        </div >
    );
};

export default Contack;