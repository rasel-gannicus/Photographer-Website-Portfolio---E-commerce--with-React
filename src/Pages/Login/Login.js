import React, { useState } from 'react';
import './Login.css';

import googleLogo from '../../Logo Icon/google.svg';
import facebookLogo from '../../Logo Icon/facebook (1).svg';
import githubLogo from '../../Logo Icon/github.svg';
import { useNavigate } from 'react-router-dom';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    const navigate = useNavigate();
    function navigation() {
        navigate('/signup');
    }
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
     // this function will get email from user and will reserve it to 'email' state
     function handleEmail(e){
        setEmail(e.target.value);
    }
    // this function will get password from user and will reserve it to 'password' state
    function handlePassword(e){
        setPassword(e.target.value);
    }
    // sign up with 'google' 
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    // sign up with 'facebook' 
    const [signInWithFacebook, user3, loading3, error3] = useSignInWithFacebook(auth);
    // sign up with 'github' 
    const [signInWithGithub, user4, loading4, error4] = useSignInWithGithub(auth);

    let errorText = document.querySelector('.error-message p');
    let spinnerSignup = document.querySelector('.spinner-signup');
    return (
        <div>
            <div className="input-fields mx-auto login-div ">
                <h4>Login</h4>
                <hr width='70%' className='mx-auto' />
                <form action="">
                    <div className="input-field ">
                        <input type="text" name="" id="" required />
                        <span className='input-placeholder'>Your Email </span>
                    </div>
                    <div className="input-field ">
                        <input type="password" name="" id="" required />
                        <span className='input-placeholder'>Your password </span>
                    </div>
                    {/* ------------------ Error message will be shown here ----------------- */}
                    <div className="error-message">
                        <span className='spinner-signup'><Spinner animation="border"  variant="primary" /></span>
                        <p></p>
                    </div>
                    <div className="message-button-div login-button-div">
                        <button>Login</button>
                    </div>
                </form>
                <p>Don't have an account ? <span onClick={navigation} draggable className=' red-text'>Register Here</span> </p>
                <div className='or-div'>
                    <hr />
                    <p>Or</p>
                </div>
                <div className="social-login-div">
                    <p>Sign in using</p>
                    <div className="social-login-div-icon">
                        <div onClick={()=>signInWithGoogle()} draggable className="social-login">
                            <img src={googleLogo} alt="" />
                        </div>
                        <div onClick={()=>signInWithFacebook()} draggable className="social-login">
                            <img src={facebookLogo} alt="" />
                        </div>
                        <div onClick={()=>signInWithGithub()} draggable className="social-login">
                            <img src={githubLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;