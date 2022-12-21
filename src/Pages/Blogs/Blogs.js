import React from 'react';
import './Blogs.css';
import profileLogo from '../../utilities/img/bg-low-size.png';

const Blogs = () => {
    return (
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4">
                    <div className="h-100">
                        <div className='blog-div h-100'>
                            <div className="blog-heading">
                                <p>What's the difference between authorization and authentication ?</p>
                            </div>
                            <div className="blog-body">
                                <p>Authentication and authorization are two vital information security processes that administrators use to protect systems and information. Authentication verifies the identity of a user or service, and authorization determines their access rights. Although the two terms sound alike, they play separate but equally essential roles in securing applications and data. Understanding the difference is crucial. Combined, they determine the security of a system.</p>
                            </div>
                            <div className="blog-footer">
                                <div className="blog-footer-img">
                                    <img src={profileLogo} alt="" />
                                </div>
                                <div className="blog-footer-desc">
                                    <p>Jonathan Wick</p>
                                    <p>Founder, 86 Canvas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="h-100">
                        <div className='blog-div h-100'>
                            <div className="blog-heading">
                                <p>What's the difference between authorization and authentication ?</p>
                            </div>
                            <div className="blog-body">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere tenetur temporibus perferendis possimus cupiditate officiis similique, eum itaque dolores odit nulla. Quam consequatur, exercitationem est deserunt mollitia non amet odio ipsa sit tempore nam necessitatibus dolor possimus libero aliquid temporibus provident obcaecati odit, quasi rem quaerat. Voluptas, quod!</p>
                            </div>
                            <div className="blog-footer">
                                <div className="blog-footer-img">
                                    <img src={profileLogo} alt="" />
                                </div>
                                <div className="blog-footer-desc">
                                    <p>Jonathan Wick</p>
                                    <p>Founder, 86 Canvas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="h-100">
                        <div className='blog-div h-100'>
                            <div className="blog-heading">
                                <p>What's the difference between authorization and authentication ?</p>
                            </div>
                            <div className="blog-body">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere tenetur temporibus perferendis possimus cupiditate officiis similique, eum itaque dolores odit nulla. Quam consequatur, exercitationem est deserunt mollitia non amet odio ipsa sit tempore nam necessitatibus dolor possimus libero aliquid temporibus provident obcaecati odit, quasi rem quaerat. Voluptas, quod!</p>
                            </div>
                            <div className="blog-footer">
                                <div className="blog-footer-img">
                                    <img src={profileLogo} alt="" />
                                </div>
                                <div className="blog-footer-desc">
                                    <p>Jonathan Wick</p>
                                    <p>Founder, 86 Canvas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;