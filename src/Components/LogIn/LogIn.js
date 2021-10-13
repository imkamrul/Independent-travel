import React from 'react';
import { Link } from 'react-router-dom';
import EmailPass from './EmailPass';
import SocialAPP from './SocialAPP';
import "./form.css"

const LogIn = () => {
    return (
        <div className="row g-0  d-flex justify-content-center mt-4">
            <div className=" col-md-10">
                <div className="row g-0  custom-shadow">
                    <div className="col-md-6">
                        <div className=" pb-3  pt-5 px-5">
                            <h3 className="text-muted mb-3" >Log In</h3>
                            <EmailPass></EmailPass>
                            <hr />
                            <SocialAPP></SocialAPP>

                        </div>
                    </div>
                    <div className="col-md-6  form-bg">
                        <div className="  p-5 ">
                            <h1>Did not have an Account ? </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi explicabo perferendis, maiores error corporis debitis dolores commodi recusandae, exercitationem a sint nostrum tenetur labore unde. Quae, est pariatur. Voluptas, cum?</p>
                            <button className="button-35"> <Link to="/register">Sign Up</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;