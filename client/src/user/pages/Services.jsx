import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Services = () => {
    return (
        <>
            <div className="breadcrumb-area pt-50">
                <div className="container">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Services</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div id="price_page" className="hero-area gray-bg">
                <div className="container">
                    <div className="row hero-area-inner align-items-end">
                        <div className="col-xl-9 col-lg-9 col-md-10">
                            <div className="hero-area-content">
                                <div className="section-title">
                                    <h1>Develop <br /></h1>
                                    <h1>With Us!! <br /></h1>
                                </div>
                                <p>
                                    At WeLink Home, we hold your hands every step of the way. Say bye to sleepless nights.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="process-2" className="pt-32 pb-40 bg-cover process-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="section-title text-low">
                                <h2 className="text-black fw-bold">
                                    Your Development Process
                                </h2>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3"></div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="right-content text-lg-end">
                                <p>
                                    First home buyer? Knock down rebuild? Elite property investor? We can help. We want to be as transparent with you as possible so you enjoy the process more because you know what to expect next.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0 mt-30">
                        <div className="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="200ms">
                            <div className="single-process-item">
                                <div className="process-num">
                                    <h2>01<ArrowRight className="las la-arrow-right" /></h2>
                                </div>
                                <h4>
                                    Let's start with hello_
                                </h4>
                                <p>
                                    <b>Meet and greet:</b> Set up a meeting with one of our specialists and chat through options of your development.
                                </p>
                                <p>
                                    <b>Proposals:</b> We present you all the options to you within 7 days after research is professionally conducted.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 offset-xl-0 offset-lg-0 wow fadeInUp animated" data-wow-delay="400ms">
                            <div className="single-process-item">
                                <div className="process-num">
                                    <h2>02<ArrowRight className="las la-arrow-right" /></h2>
                                </div>
                                <h4>
                                    Paint your vision_
                                </h4>
                                <p>
                                    <b>Decision making:</b> We walk you through all the options and scenarios for the development.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="600ms">
                            <div className="single-process-item">
                                <div className="process-num">
                                    <h2>03<ArrowRight className="las la-arrow-right" /></h2>
                                </div>
                                <h4>
                                    The numbers game_
                                </h4>
                                <p>
                                    <b>Calculate:</b> We present you a full feasibility report with relevant data freshly collected.
                                </p>
                                <p>
                                    <b>Drawing board:</b> Our design team will prepare a selection of scenarios for the development.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 wow fadeInUp animated" data-wow-delay="600ms">
                            <div className="single-process-item">
                                <div className="process-num">
                                    <h2>04<ArrowRight className="las la-arrow-right" /></h2>
                                </div>
                                <h4>
                                    Commit to the project_
                                </h4>
                                <p>
                                    <b>Pull the trigger:</b> You decide, we execute. By this stage, we have cleared our mind and both you and Welink are very committed to making it a success.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 wow fadeInUp animated" data-wow-delay="600ms">
                            <div className="single-process-item">
                                <div className="process-num">
                                    <h2>05<ArrowRight className="las la-arrow-right" /></h2>
                                </div>
                                <h4>
                                    Design approval_
                                </h4>
                                <p>
                                    <b>DA granted:</b> After weeks, sometimes months of hard work, we are now being supported by your local authorities for the development.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 wow fadeInUp animated" data-wow-delay="600ms">
                            <div className="single-process-item">
                                <div className="process-num">
                                    <h2>06<ArrowRight className="las la-arrow-right" /></h2>
                                </div>
                                <h4>
                                    Construction permit_
                                </h4>
                                <p>
                                    <b>Building permit granted:</b> Welink team is focused during the process of documentation. 100% dedicated team ensures 100% success on site.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 wow fadeInUp animated" data-wow-delay="600ms">
                            <div className="single-process-item">
                                <div className="process-num">
                                    <h2>07<ArrowRight className="las la-arrow-right" /></h2>
                                </div>
                                <h4>
                                    Construction underway_
                                </h4>
                                <p>
                                    <b>Exciting times ahead:</b> Congralutaions! Say bye to paperwork (at least for you). Now you will see how fast and accurate we deliver a project.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="600ms">
                            <div className="single-process-item">
                                <div className="process-num">
                                    <h2>08<ArrowRight className="las la-arrow-right" /></h2>
                                </div>
                                <h4>
                                    Hand over_
                                </h4>
                                <p>
                                    <b>Completion Inspection:</b> You have been waiting for this big day. Your dedicated construction manager will present your home or homes to you.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="600ms">
                            <div className="single-process-item">
                                <div className="process-num">
                                    <h2>09<ArrowRight className="las la-arrow-right" /></h2>
                                </div>
                                <h4>
                                    Get it sold or move in_
                                </h4>
                                <p>
                                    <b>The Start:</b> If you are moving in, this is the start of your new chapter. We will always be here to answer your questions.
                                </p>
                                <p>
                                    <b>The End:</b> If we are selling these properties for you, this is the end of your project. We will get them sold while you are getting ready for your next project with Welink.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="600ms">
                            <div className="single-process-item">
                                <div className="process-num">
                                    <h2>10<ArrowRight className="las la-arrow-right" /></h2>
                                </div>
                                <h4>
                                    Aftercare_
                                </h4>
                                <p>
                                    <b>Genuine customer service:</b> Once you have lived in your brand new home, we are obliged to perform a 6 months defects maintenance for you. You are welcome to contact us at any time should you wish to get them attended sooner.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services