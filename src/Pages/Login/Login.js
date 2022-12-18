import React from 'react';
import './Login.css';

import googleLogo from '../../Logo Icon/google.svg';
import facebookLogo from '../../Logo Icon/facebook (1).svg';
import githubLogo from '../../Logo Icon/github.svg';
import { useNavigate } from 'react-router-dom';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';

const Login = () => {
    const navigate = useNavigate();
    function navigation() {
        navigate('/signup');
    }

    // sign up with 'google' 
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    // sign up with 'facebook' 
    const [signInWithFacebook, user3, loading3, error3] = useSignInWithFacebook(auth);
    // sign up with 'github' 
    const [signInWithGithub, user4, loading4, error4] = useSignInWithGithub(auth);
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