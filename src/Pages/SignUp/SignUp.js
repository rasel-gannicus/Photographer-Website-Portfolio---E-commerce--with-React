import React from 'react';
import './SignUp.css';
import googleLogo from '../../Logo Icon/google.svg';
import facebookLogo from '../../Logo Icon/facebook (1).svg';
import githubLogo from '../../Logo Icon/github.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
    const navigate = useNavigate();
    function navigation() {
        navigate('/login');
    }

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[repassword, setRepassword] = useState('');

    function handleEmail(e){
        setEmail(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }
    function handleRepassword(e){
        setRepassword(e.target.value);
    }

    let errorText = document.querySelector('.error-message p');
    function handleSubmit(e){
        e.preventDefault();
        if(password.length<6){
            errorText.innerText = 'Password length must be more than 6 character'
            return;
        }else if(password !== repassword){
            errorText.innerText = 'Password is not matched !';
            return;
        }
        errorText.innerText = '';
    }

    return (
        <div>
            <div className="input-fields mx-auto login-div ">
                <h4>Sign Up</h4>
                <hr width='70%' className='mx-auto' />
                <form action="" onSubmit={handleSubmit}>
                    <div className="input-field ">
                        <input type="text" name="" id="" required />
                        <span className='input-placeholder'>Your Name </span>
                    </div>
                    <div className="input-field ">
                        <input onBlur={handleEmail} type="text" name="" id="" required />
                        <span className='input-placeholder'>Your Email </span>
                    </div>
                    <div className="input-field ">
                        <input onBlur={handlePassword} type="password" name="" id="" required />
                        <span className='input-placeholder'>Your password </span>
                    </div>
                    <div className="input-field ">
                        <input onBlur={handleRepassword} type="password" name="" id="" required />
                        <span className='input-placeholder'>Confirm password </span>
                    </div>
                    <div className="error-message">
                        <p></p>
                    </div>
                    <div className="message-button-div login-button-div">
                        <button>Login</button>
                    </div>
                </form>
                <p>Already have an account ? <span onClick={navigation} draggable className='text-danger red-text'>Login Here</span> </p>
                <div className='or-div'>
                    <hr />
                    <p>Or</p>
                </div>
                <div className="social-login-div">
                    <p>Sign in using</p>
                    <div className="social-login-div-icon">
                        <div className="social-login">
                            <img src={googleLogo} alt="" />
                        </div>
                        <div className="social-login">
                            <img src={facebookLogo} alt="" />
                        </div>
                        <div className="social-login">
                            <img src={githubLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;