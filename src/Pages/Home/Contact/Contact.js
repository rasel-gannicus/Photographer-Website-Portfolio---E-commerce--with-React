import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='my-5'>
            <div className="contact-parent container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="h-100">
                            <div className="contact-left">
                                <img src="https://i.ibb.co/yRFfLG1/craig-manners-bm-Kb-Wks7pps-unsplash.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="h-100">
                            <div className="contact-form">
                                <h2 className='my-3 fw-bold'>Contact Me </h2>
                                <div className="input-fields">
                                    <div className="input-field">
                                        <input type="text" name="" id="" />
                                    </div>
                                    <p>Write Your Name ...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;