import { Play } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <div id="home-3" className="hero-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="hero-content-wrap">
                            <div className="section-title">
                                <h6>Wecome to WeLink Home.</h6>
                                <h1>Transform your Vision into Reality</h1>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="mt-40 hero-btn wow fadeInUp animated" data-wow-delay="500ms">
                                <a href="/services" className="mr-40 theme-btn">Get Started</a>
                                <div className="video-wrap d-inline-flex align-items-center">
                                    <a href="#" className="video-play-btn mfp-iframe">
                                        <Play className="las la-play" />
                                    </a>
                                    <span>View Details</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero