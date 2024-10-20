import React from 'react'
import { Hero } from '../components'
import { Construct, Design, Develop } from '../assets/img'

const Home = () => {
    return (
        <>
            <Hero />

            <div id="feature-2" className="feature-area gray-bg section-padding pb-100">
                <div className="container">
                    <div className='row'>
                        <div className="section-title text-low">
                            <div>
                                <h2>What We Do</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp animated">
                            <div className="single-feature-item">
                                <div className="feature-icon">
                                    <img src={Design} alt="" />
                                </div>
                                <div className="feature-content">
                                    <h5>Design</h5>
                                    <p>Welink is committed to refined and innovative design that stands the test of time.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp animated">
                            <div className="single-feature-item">
                                <div className="feature-icon">
                                    <img src={Develop} alt="" />
                                </div>
                                <div className="feature-content">
                                    <h5>Develop</h5>
                                    <p>Welink is committed to creating living spaces that are smart, unique, memorable and sustainable.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp animated">
                            <div className="single-feature-item">
                                <div className="feature-icon">
                                    <img src={Construct} alt="" />
                                </div>
                                <div className="feature-content">
                                    <h5>Construct</h5>
                                    <p>Welink is committed to delivering exceptional homes on time and on budget every single time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home