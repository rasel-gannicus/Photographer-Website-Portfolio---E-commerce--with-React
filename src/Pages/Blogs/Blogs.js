import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="">
                        <div className='blog-div'>
                            <div className="blog-heading">
                                <h2>Blog Heading</h2>
                            </div>
                            <div className="blog-body">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere tenetur temporibus perferendis possimus cupiditate officiis similique, eum itaque dolores odit nulla. Quam consequatur, exercitationem est deserunt mollitia non amet odio ipsa sit tempore nam necessitatibus dolor possimus libero aliquid temporibus provident obcaecati odit, quasi rem quaerat. Voluptas, quod!</p>
                            </div>
                            <div className="blog-footer">
                                <h2>Blog Footer</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;