import React from 'react'
import { Hero } from '../components'
import { AboutArea, Construct, Design, Develop } from '../assets/img'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Hero />

            <div id="feature-2" className="feature-area gray-bg section-padding pb-100">Z
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
                                    <h2 className='text-black'>About WeLink Home</h2>
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

            <div className="project-area gray-bg section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="text-center col-xl-7 col-lg-7 col-md-9">
                            <div className="section-title">
                                <h2>Discover our latest projects</h2>
                            </div>
                            <p>
                                Combine our knowledge, experience and award-winning designs with the dedicated in-house construction team, we put smiles on the faces of all our satisfied customers.
                            </p>
                            <Link to='/projects'>
                                <h6>See More</h6>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="grid grid-cols-4 gap-4 mt-10 project-grid">
                        {/* Project Item 1 */}
                        <div className="bg-cover single-project-item" style={{ backgroundImage: "url('https://capricorn-theme.com/html/architon/assets/img/project/project-details/project-details.jpg')" }}>
                            <div className="project-inner">
                                <a href="#" className="project-icon">
                                    <Plus className="las la-plus" />
                                </a>
                                <div className="hover-info">
                                    <h4>Name Residence</h4>
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