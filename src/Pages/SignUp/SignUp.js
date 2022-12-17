import React from 'react';
import './SignUp.css';
import googleLogo from '../../Logo Icon/google.svg';
import facebookLogo from '../../Logo Icon/facebook (1).svg';
import githubLogo from '../../Logo Icon/github.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import auth from '../../utilities/firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';


const SignUp = () => {
    const navigate = useNavigate();
    function navigation() {
        navigate('/login');
    }

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[repassword, setRepassword] = useState('');

    // this function will get email from user and will reserve it to 'email' state
    function handleEmail(e){
        setEmail(e.target.value);
    }
    // this function will get password from user and will reserve it to 'password' state
    function handlePassword(e){
        setPassword(e.target.value);
    }
    // this function will get re-password from user and will reserve it to 'repassword' state
    function handleRepassword(e){
        setRepassword(e.target.value);
    }
    // sign in with 'email & password' 
    const [createUserWithEmailAndPassword, user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    // sign in with 'google' 
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

    let errorText = document.querySelector('.error-message p');
    let spinnerSignup = document.querySelector('.spinner-signup');
    function handleSubmit(e){
        spinnerSignup.style.display = 'block';
        e.preventDefault();
        if(password.length<6){
            errorText.innerText = 'Password length must be more than 6 character'
            spinnerSignup.style.display = 'none';
            return;
        }else if(password !== repassword){
            errorText.innerText = 'Password is not matched !';
            spinnerSignup.style.display = 'none';
            return;
        }
        errorText.innerText = '';
        createUserWithEmailAndPassword(email, password);
        return;
    }
    if(user || user2){
        navigate('/');
    }
    if(error){
        console.log(error);
        errorText.innerText = `${error.message}`;
        spinnerSignup.style.display = 'none';
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
            {/* ------------------ Error message will be shown here ----------------- */}
                    <div className="error-message">
                        <span className='spinner-signup'><Spinner animation="border"  variant="primary" /></span>
                        <p></p>
                    </div>
                    <div className="message-button-div login-button-div">
                        <button>Login</button>
                    </div>
                </form>
                <p>Already have an account ? <span onClick={navigation} draggable className='red-text'>Login Here</span> </p>
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