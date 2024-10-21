import React from 'react'
import { Hero } from '../components'
import { AboutArea, Construct, Design, Develop } from '../assets/img'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Hero />

            <div className="pt-12 pb-12 gray-bg feature-section section-padding">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-xl-5 col-lg-4">
                            <div className="section-title text-low">
                                <div>
                                    <h2 className='text-black fw-bold'>What We Do</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8">
                            <div className="row gy-5 feature-wrap">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay=".2s">
                                    <div className="single-feature-item">
                                        <div className="single-feat-inner">
                                            <div className="icon-wrap">
                                                <img src={Design} alt="Design" />
                                            </div>
                                            <div className="service-title">
                                                <h4>Design</h4>
                                            </div>
                                        </div>
                                        <p>
                                            Welink is committed to refined and innovative design that stands the test of time.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay=".4s">
                                    <div className="single-feature-item">
                                        <div className="single-feat-inner">
                                            <div className="icon-wrap">
                                                <img src={Develop} alt="Develop" />
                                            </div>
                                            <div className="service-title">
                                                <h4>Develop</h4>
                                            </div>
                                        </div>
                                        <p>
                                            Welink is committed to creating living spaces that are smart, unique, memorable and sustainable.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay=".6s">
                                    <div className="single-feature-item">
                                        <div className="single-feat-inner">
                                            <div className="icon-wrap">
                                                <img src={Construct} alt="Construct" />
                                            </div>
                                            <div className="service-title">
                                                <h4>Construct</h4>
                                            </div>
                                        </div>
                                        <p>
                                            Welink is committed to delivering exceptional homes on time and on budget every single time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-0 about-section section-padding pb-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-img-wrap">
                                <div className="image-one wow fadeInUp">
                                    <img src={AboutArea} alt="About WeLink Home" />
                                </div>
                                <div className="image-two wow fadeInUp">
                                    <img src={AboutArea} alt="About WeLink Home" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-content-wrapper wow fadeInUp animated">
                                <div className="section-title text-low">
                                    <h2 className='text-black fw-bold'>About WeLink Home</h2>
                                </div>
                                <div className="p-animation">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <a href="/about" className="theme-btn mt-30">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feature_slider_wrap gray-bg border-top border-bottom pt-60 pb-60">
                <div className="feature_item">
                    <h2>
                        <img src="https://capricorn-theme.com/html/architon/assets/img/asterisk-dark.png" alt="feat-icon" />
                        Design for Sustainability
                    </h2>
                    <h2 className="stroke">
                        <img src="https://capricorn-theme.com/html/architon/assets/img/asterisk-dark.png" alt="feat-icon" />
                        Innovative Design
                    </h2>
                    <h2>
                        <img src="https://capricorn-theme.com/html/architon/assets/img/asterisk-dark.png" alt="feat-icon" />
                        Experienced Team
                    </h2>
                    <h2 className="stroke">
                        <img src="https://capricorn-theme.com/html/architon/assets/img/asterisk-dark.png" alt="feat-icon" />
                        Honesty & Integrity
                    </h2>
                    <h2>
                        <img src="https://capricorn-theme.com/html/architon/assets/img/asterisk-dark.png" alt="feat-icon" />
                        24/7 Accessibility
                    </h2>
                    <h2 className="stroke">
                        <img src="https://capricorn-theme.com/html/architon/assets/img/asterisk-dark.png" alt="feat-icon" />
                        Quality Craftsmanship
                    </h2>
                </div>
            </div>

            <div className="team-section section-padding pb-90">
                <div className="container">
                    <div className="row border-bottom">
                        <div className="col-xl-7 col-lg-7">
                            <div className="section-title text-low">
                                <h2 className='text-black fw-bold'>
                                    Discover our <br /> latest projects
                                </h2>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="right-content text-lg-end">
                                <p>
                                    Combine our knowledge, experience and award-winning designs with the dedicated in-house construction team, we put smiles on the faces of all our satisfied customers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-40 row gx-5">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div className="single-team-wrap">
                                <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-details/project-details.jpg" alt="" />
                                <div className="team-info">
                                    <span>
                                        Location
                                    </span>
                                    <span> 
                                        Name Residence
                                    </span>
                                </div>
                                <p className="designation">
                                    Price: 400 RWF
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div className="single-team-wrap">
                                <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-details/project-details.jpg" alt="" />
                                <div className="team-info">
                                    <span>
                                        Location
                                    </span>
                                    <span> 
                                        Name Residence
                                    </span>
                                </div>
                                <p className="designation">
                                    Price: 400 RWF
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div className="single-team-wrap">
                                <img src="https://capricorn-theme.com/html/architon/assets/img/project/project-details/project-details.jpg" alt="" />
                                <div className="team-info">
                                    <span>
                                        Location
                                    </span>
                                    <span> 
                                        Name Residence
                                    </span>
                                </div>
                                <p className="designation">
                                    Price: 400 RWF
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home