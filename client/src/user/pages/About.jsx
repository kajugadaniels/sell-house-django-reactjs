import React, { useState } from 'react'
import { AboutHero } from '../assets/img'

const About = () => {
    // State to keep track of the currently opened accordion item
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to handle accordion toggle
    const toggleAccordion = (index) => {
        // If the clicked index is already active, close it; otherwise, set it as active
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className="breadcrumb-area pt-50">
                <div className="container">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div id="about_page" className="hero-area">
                <div className="container">
                    <div className="row hero-area-inner">
                        <div className="col-xl-9 col-lg-9">
                            <div className="hero-area-content">
                                <div className="section-title">
                                    <h1>About <br /></h1>
                                    <h1 className="pl-150">WeLink Home</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 d-none d-lg-block text-lg-end">
                            <h4>Our History</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-feature-img">
                            <img src={AboutHero} alt="" />
                        </div>
                    </div>
                    <div className="row mt-30">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-5 vision-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="section-title text-low">
                                <h2 className='text-black'>Focused. Genuine. Innovative</h2>
                            </div>
                            <p>
                                hrough many years of developing high quality houses, units and apartments, Welink has a proven record of meeting highest standard during design, development and construction.
                            </p>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="cp-custom-accordion">
                                <div className="accordions" id="visionExample">
                                    {/* Accordion Item 1 */}
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="visionOne">
                                            <button
                                                className={`accordion-buttons ${activeIndex === 0 ? '' : 'collapsed'}`}
                                                type="button"
                                                onClick={() => toggleAccordion(0)} // Toggle the first accordion item
                                                aria-expanded={activeIndex === 0}
                                                aria-controls="collapseOne"
                                            >
                                                Who is WeLink Home
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className={`accordion-collapse ${activeIndex === 0 ? 'show' : 'collapse'}`}
                                            aria-labelledby="visionOne"
                                            data-bs-parent="#visionExample"
                                        >
                                            <div className="accordion-body">
                                                We are a property group driven by innovative ideas and creative design. Delivering world-class architecturally designed apartments is our calling card. But there’s more to us than that. We believe luxury apartment living should be accessible to everyone. That’s why our approach to property development is truly unique.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Accordion Item 2 */}
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="visionTwo">
                                            <button
                                                className={`accordion-buttons ${activeIndex === 1 ? '' : 'collapsed'}`}
                                                type="button"
                                                onClick={() => toggleAccordion(1)} // Toggle the second accordion item
                                                aria-expanded={activeIndex === 1}
                                                aria-controls="collapseTwo"
                                            >
                                                Luxury residences, at your fingertips
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className={`accordion-collapse ${activeIndex === 1 ? 'show' : 'collapse'}`}
                                            aria-labelledby="visionTwo"
                                            data-bs-parent="#visionExample"
                                        >
                                            <div className="accordion-body">
                                                We are a property group driven by innovative ideas and creative design. Delivering world-class architecturally designed apartments is our calling card. But there’s more to us than that. We believe luxury living should be accessible to everyone. That’s why our approach to property development is truly unique.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About