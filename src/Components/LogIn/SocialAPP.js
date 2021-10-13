import React, { useState } from 'react';

import facebook from '../../img/facebook.png'
import microsoft from '../../img/microsoft.png'
import github from '../../img/github.png'
import google from '../../img/google.png'

import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const SocialAPP = () => {
    const [error, setError] = useState(" ");
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home'
    const history = useHistory();
    const { signInWithgoogle, signInWithFacebook, signInWithMicrosoft, signInWithGithub } = useAuth();
    const handleGoogleLogIn = () => {
        signInWithgoogle()
            .then((result) => {
                history.push(redirect_uri)
                // console.log(result.user);
            }).catch((error) => {
                setError("Log in failed");
            });
    }
    const handleFacebookLogIn = () => {
        signInWithFacebook()
            .then((result) => {
                history.push(redirect_uri)
            }).catch((error) => {
                setError("Log in failed");
            });
    }
    const handleGithubLogIn = () => {
        signInWithGithub()
            .then((result) => {
                history.push(redirect_uri)
            }).catch((error) => {
                setError("Log in failed");
            });
    }
    const handleMicrosoftLogIn = () => {
        signInWithMicrosoft()
            .then((result) => {
                history.push(redirect_uri)
                console.log(result.user);
            }).catch((error) => {
                setError("Log in failed");
            });
    }
    return (
        <div className="mb-4">
            <div className="text-center">
                <p className="text-muted">Connect with social media</p>
                <img onClick={handleGoogleLogIn} src={google} className="link-img-style" alt="" />
                <img onClick={handleFacebookLogIn} src={facebook} className="link-img-style" alt="" />
                <img onClick={handleMicrosoftLogIn} src={microsoft} className="link-img-style" alt="" />
                <img onClick={handleGithubLogIn} src={github} className="link-img-style" alt="" />
                <p className="text-center text-danger">{error}</p>
            </div>
        </div>
    );
};

export default SocialAPP;