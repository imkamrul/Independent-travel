import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import SocialAPP from './SocialAPP';
import { useHistory } from 'react-router';


const Register = () => {
    const history = useHistory();
    const { setName, setPassword, setEmail, registerNewUser, verifyEmail, setUserName } = useAuth();
    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChnage = e => {
        setEmail(e.target.value)

    }
    const handlepasswordChnage = e => {
        setPassword(e.target.value);

    }
    const handleCreateAccount = (e) => {
        e.preventDefault();
        registerNewUser(e)
            .then((result) => {
                setUserName()
                    .then(() => {
                        verifyEmail()
                            .then(result => {


                                history.push('/home')
                                window.location.reload();



                            })


                    }).catch((error) => {

                    });
            })
    }

    return (
        <div className="row g-0  d-flex justify-content-center mt-5">
            <div className=" col-md-10">
                <div className="row g-0  custom-shadow">
                    <div className="col-md-6  form-bg">
                        <div className="  p-5 ">
                            <h1>Did not have already an Account ? </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi explicabo perferendis, maiores error corporis debitis dolores commodi recusandae, exercitationem a sint nostrum tenetur labore unde. Quae, est pariatur. Voluptas, cum?</p>
                            <button className="button-35"> <Link to="/login">Sign In</Link></button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className=" p-5">
                            <h3 className="text-muted mb-3" >Create a new account </h3>
                            <form className=" mx-auto">
                                <div className="row mb-3 g-0">
                                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Name</label>
                                    <div className="col-sm-9">
                                        <input onBlur={handleNameChange} type="text" className="form-control" id="name" placeholder="Full Name" required />
                                    </div>
                                </div>
                                <div className="row mb-3 g-0">
                                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input onBlur={handleEmailChnage} type="email" className="form-control" id="inputEmail3" placeholder="email" required />
                                    </div>
                                </div>
                                <div className="row mb-3 g-0">
                                    <label htmlFor="inputPassword3" className="col-sm-3 col-form-label" >Password</label>
                                    <div className="col-sm-9">
                                        <input onBlur={handlepasswordChnage} type="password" className="form-control" id="inputPassword3" placeholder="password" required />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="button-75" type="submit"><span className="text pb-4" onClick={handleCreateAccount}>Sign Up</span></button>
                                </div>






                                <p className="mt-3">Do you  have already an account ?    <Link to="/login">Sign In now ?</Link></p>

                            </form>
                            <hr />
                            <SocialAPP></SocialAPP>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;