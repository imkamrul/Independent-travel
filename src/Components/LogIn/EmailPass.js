import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const EmailPass = () => {
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home'
    const history = useHistory();
    const { setEmail, setPassword, processLogin, handleResetPath } = useAuth();
    const handleEmailChnage = e => {
        setEmail(e.target.value)

    }
    //    pass change 
    const handlepasswordChnage = e => {
        setPassword(e.target.value);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        processLogin()
            .then((result) => {
                history.push(redirect_uri)
            })
            .catch((error) => {
            });

    }

    return (
        <form className=" mx-auto">
            <div className="row mb-2 g-0">
                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-9">
                    <input type="email" className="form-control" id="inputEmail3" onBlur={handleEmailChnage} required />
                </div>
            </div>
            <div className="row mb-3 g-0">
                <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-9">
                    <input type="password" className="form-control" id="inputPassword3" onBlur={handlepasswordChnage} />
                </div>
            </div>

            <div className="text-center">
                <button className="button-75" ><span className="text" onClick={handleLogin}>Sign In</span></button>
            </div>


            <input type="submit" className="btn btn-secondary btn-sm my-3" onClick={handleResetPath} value="Forget Password ?" />

            <p>Dont have an account ?    <Link to="/register">Sign Up now ?</Link></p>

        </form>
    );
};

export default EmailPass;