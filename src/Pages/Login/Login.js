import React from 'react';

const Login = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 mx-auto bg-white py-5 px-3 login-div">
                    <div className="">
                        <div className="input-fields">
                            <form action="">                                
                                <div className="input-field ">
                                    <input type="text" name="" id="" required />
                                    <span className='input-placeholder'>Your Email </span>
                                </div>
                                <div className="input-field ">
                                    <input type="text" name="" id="" required />
                                    <span className='input-placeholder'>Your password </span>
                                </div>
                                <div className="message-button-div ">
                                    <button>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;