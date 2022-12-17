import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-4 mx-auto bg-white py-5 px-4 login-div">
                    <div className="">
                        <div className="input-fields">
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
                            <p>Don't have an account ? <span className='text-danger red-text'>Register Here</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;